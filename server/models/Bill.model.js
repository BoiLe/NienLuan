import mongoose from "mongoose";
const schema = new mongoose.Schema({
  id_user: {
    type: String,
    required: [true, "can't be blank"],
    index: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  total: Number,
  address: String,
  phone: String,
  name: String,
  token: String,
  issend: {
    type: String,
    default: '99'
  }
});
export const BillModel = mongoose.model("Bill", schema);
