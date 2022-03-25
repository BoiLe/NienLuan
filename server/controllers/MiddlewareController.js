import jwt from "jsonwebtoken";
import {} from "dotenv/config";

export const verifyToken = (req, res, next) => {
  const token = req.headers.token;
  if (token) {
    // tách token
    const accessToken = token.split(" ")[1];
    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        res.status(403).json({
          message: "Token is not valid",
        });
      }
      req.user = user;
      next();
    });
  } else {
    res.status(401).json({
      message: "Bạn không được xác thực",
    });
  }
};
export const verifyTokenAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user._id == req.params.id || req.user.is_admin) {
      next();
    } else {
      res.status(403).json({
        message: "Bạn không được cấp quyền",
      });
    }
  });
};
