import mongoose, { Document, Schema } from "mongoose";
import { CategoryInterface } from "../interfaces";
// export interface categoryInterface extends Document {
//   _id?: String;
//   name: String;
// }

const CategorySchema: Schema = new Schema({
  name: {
    type: String,
    enum: {
      values: ["Pizza", "Pasta", "Burger", "Dabeli"],
      message: "{VALUE} is not  a Valid Category ",
    },
    require: true,
    unique: true,
  },
});

export const categories = mongoose.model<CategoryInterface>(
  "categories",
  CategorySchema
);
