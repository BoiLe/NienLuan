import { UserModel } from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {} from "dotenv/config";

let refreshTokenss = [];
export const register = async (req, res) => {
  UserModel.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length >= 1) {
        return res.status(409).json({
          message: "Emai đã tồn tại ",
        });
      } else {
        // hash password
        bcryptjs.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            // Existing User
            const User = new UserModel({
              _id: req.body._id,
              email: req.body.email,
              password: hash,
              address: req.body.address,
              phone_number: req.body.phone_number,
              is_admin: req.body.is_admin,
              is_verify: req.body.is_verify,
              token: req.body.token,
            });
            User.save()
              .then((result) => {
                res.status(201).json({
                  User,
                  message: "Tài khoản đã được tạo thành công",
                });
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({
                  Error: "Email không hợp lệ",
                });
              });
          }
        });
      }
    });
};
const generateAccessToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      is_admin: user.is_admin,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "20m",
    }
  );
};
const generateRefreshToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      email: user.email,
      is_admin: user.is_admin,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "20m",
    }
  );
};

export const login = (req, res) => {
  UserModel.findOne({ email: req.body.email })
    .exec()
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Người dùng không tồn tại",
        });
      }
      bcryptjs.compare(req.body.password, user.password, (err, result) => {
        if (result) {
          const accsessToken = generateAccessToken(user);
          const refreshToken = generateRefreshToken(user);
          refreshTokenss.push(refreshToken);
          res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            path: "/",
            sameSite: "strict",
            secure: false,
          });
          return res.status(200).json({
            message: "Đăng nhập thành công",
            user,
            accsessToken: accsessToken,
          });
        } else {
          return res.status(401).json({
            message: "Mật khẩu hoặc tên người dùng sai rồi",
          });
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Lỗi đăng nhập",
      });
    });
};
export const RequestRefreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.status(401).json("Bạn không có quyền truy cập");
  if (!refreshTokenss.includes(refreshToken)) {
    return res.status(403).json("Refresh token not valid");
  }
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
    if (err) return res.status.json("Lỗi");
    // create new token
    refreshTokenss = refreshTokenss.filter((token) => token !== refreshToken);
    const newAccessToken = generateAccessToken(user);
    const newReFreshToken = generateRefreshToken(user);
    refreshTokenss.push(newReFreshToken);
    res.cookie("refreshToken", newReFreshToken, {
      httpOnly: true,
      secure: false,
      path: "/",
      sameSite: "strict",
    });
    return res.status(200).json({
      accsessToken: newAccessToken,
    });
  });
};
// LOG OUT
export const logout = (req, res) => {
  res.clearCookie("refreshToken");
  refreshTokenss = refreshTokenss.filter(
    (token) => token !== req.cookies.refreshToken
  );
  res.status(200).json("Đã đăng xuất");
};
