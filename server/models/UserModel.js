import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      match:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    },
    password: {
      type: String,
      required: [true, "Trường này không được để trống"],
    },
    address: {
      type: String,
      minlength: 10,
      maxlength: 50,
    },
    phone_number: {
      type: Number,
      minlength: 10,
      maxlength: 10,
      required: [true, "Độ dài của sđt phải là 10"],
    },
    is_admin: {
      type: Boolean,
      default: false,
    },
    is_verify: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
    },

    // CreateAt and UpdateAt
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", schema);
