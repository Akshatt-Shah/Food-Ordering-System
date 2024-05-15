import mongoose from "mongoose";
import express from "express";
import { mainrouter } from "../routes/main.route";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
config();
const PORT = process.env.PORT || 3000;
const URL = process.env.MONGO_URL;
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use("/", mainrouter);
export async function startServer() {
  try {
    if (URL) {
      await mongoose
        .connect(URL)
        .then(() => {
          console.log("Mongo DB Connected");
        })
        .catch((err) => {
          console.log(err);
        });

      app.listen(PORT, () => {
        console.log("The Server Is Running On this ", PORT);
      });
    } else {
      console.log("Mongo DB Not Connected URL Not Found");
    }
  } catch (error: any) {
    console.log(error.message);
  }
}
