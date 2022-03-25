import { OrderModel } from "../models/OrderModel.js";
import mongoose from "mongoose";
import { ProductModel } from "../models/ProductModel.js";
// [GET] order
export const GetOrder = async (req, res) => {
  try {
    const orders = await OrderModel.find().populate("product"); // return all product in database
    const response = {
      count: orders.length,
      Order: orders.map((order) => {
        return {
          _id: order._id,
          product: order.product,
          quantity: order.quantity,
          request: {
            type: "GET",
            url: "http://localhost:5000/order/" + order._id,
          },
        };
      }),
    };
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: "Không có đơn hàng nào" });
  }
};
// [POST] create Order
export const CreateOrder = async (req, res) => {
  ProductModel.findById(req.body.productId)
    .then((product) => {
      if (!product) {
        return res.status(404).json({
          message: "Lỗi tạo đơn hàng",
        });
      }
      const order = new OrderModel({
        product: req.body.productId,
        quantity: req.body.quantity,
      });
      return order.save();
    })
    .then((result) => {
      res.status(200).json({
        message: "Đơn hàng được tạo thành công",
        result,
        request: {
          type: "GET",
          url: "http://localhost:5000/order/" + result._id,
        },
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Lỗi" });
    });
};
// [GET] get Order by Id
export const GetOrderId = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await OrderModel.findById(id).populate("product");
    if (!order) {
      return res.status(404).json({ message: "Không tìm thấy đơn hàng" });
    }
    res.status(200).json({
      order,
      request: {
        type: "GET",
        url: "http://localhost:5000/order/",
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi truy xuất đơn hàng" });
  }
};
// [PATCH] Update Product
export const UpdateOrderId = (req, res) => {
  const id = req.params.id;
  ProductModel.updateOne(
    { _id: id },
    {
      $set: {
        id_category: req.body.newCategory,
        name: req.body.newName,
        price: req.body.newPrice,
        EXP: req.body.newEXP,
        img: req.body.newImg,
        describe: req.body.newDescribe,
        id_nsx: req.body.newId_nsx,
      },
    }
  );
};
// [DELETE] Delete Order
export const DeleteOrderId = async (req, res) => {
  if (typeof req.params.id === "undefined") {
    return res.status(422).json({ message: "Đơn hàng cần xóa không có" });
  }
  let OrderFind;
  try {
    OrderFind = await OrderModel.findById(req.params.id);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Lỗi tìm kiếm" });
  }
  OrderFind.remove();
  res.status(200).json({ message: "Xóa đơn thành công" });
};
