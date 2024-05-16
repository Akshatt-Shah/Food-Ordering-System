import mongoose, { Document, Schema } from "mongoose";
import { categories } from "./Category.Schema";
import { ProductInterface } from "../interfaces";
// export interface ProductInterface extends Document {
//   _id?: String;
//   name: String;
//   price: Number;
//   status: Boolean;
//   category_id: String;
// }

const ProductSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true, min: 1 },
  status: { type: Boolean, required: true },
  category_id: { type: Schema.ObjectId, ref: categories, required: true },
});

export const products = mongoose.model<ProductInterface>(
  "products",
  ProductSchema
);
