import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "can't be blank"],
     
    },
    price: {
      type: Number,
      required: [true, "can't be blank"],
    },
    img: {
      type: String,
      required: [true, "can't be blank"],
    },
    brand: {
      type: String,
      required: [true, "can't be blank"],
    },
    describe: {
      type: String,
      default: "Thuốc chữa bệnh",
    },
    EXP: {
      type: Date,
      $dateToString: { format: "%Y-%m-%d", date: "$date" },
      default: new Date(),
    },
   

    // CreateAt and UpdateAt
  },
  { timestamps: true }
);

export const ProductModel = mongoose.model("Product", schema);
