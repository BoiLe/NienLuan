import mongoose from "mongoose";
const schema = new mongoose.Schema({
  city: String,
  code: String,
  district: [
    {
      name: String,
      code: String,
      ward: [
        {
          name: String,
          code: String,
        },
      ],
    },
  ],
});
export const AddressModel = mongoose.model("Address", schema);
