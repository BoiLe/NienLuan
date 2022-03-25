import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "can't be blank"],
  },
});
export const CategoryModel = mongoose.model("Category", schema);
