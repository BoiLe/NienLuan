import { UserModel } from "../models/UserModel.js";

export const getAllUser = async (req, res, next) => {
  try {
    const Users = await UserModel.find(); // return all product in database
    const response = {
      count: Users.length,
      Users: Users.map((User) => {
        return {
          User,
          request: {
            type: "GET",
          },
        };
      }),
    };
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: "Không có người dùng nào" });
  }
};

export const deleteUser = async (req, res, next) => {
  const user = await UserModel.findByIdAndDelete(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(400).json({
          message: "Người dùng không tồn tại",
        });
      } else {
        return res.status(200).json({
          message: "Đã xóa người dùng",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        Error: "Lỗi",
      });
    });
};
