import mongoose from "mongoose";
import express from "express";
import route from "../../routes/index.js";
import cors from "cors";
import {} from "dotenv/config";

const app = express();
const port = 5000;
const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.zvb3d.mongodb.net/NlCS?retryWrites=true&w=majority`;

function connect() {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.use(cors());
      route(app);
      app.listen(port, () => {
        console.log(`Server is running on ${port}`);
      });
      console.log("Conneted to DB");
    })
    .catch((err) => {
      console.log("err", err);
    });
}

export default connect;
