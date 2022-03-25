import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    quantity: { type: Number, default: 1 },

    // CreateAt and UpdateAt
  },
  { timestamps: true }
);

export const OrderModel = mongoose.model("Order", schema);
