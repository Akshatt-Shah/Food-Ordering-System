import mongoose, { Document, Schema } from "mongoose";
import { products } from "./Products.Schema";
import { users } from "./User.Schema";
import { coupons } from "./Coupon.Schema";
import { OrdersInterface } from "../interfaces";
// export interface OrdersInterface extends Document {
//   _id?: String;
//   products: [
//     {
//       product_id: String;
//       product_name: String;
//       product_qty: Number;
//       product_price: Number;
//     }
//   ];
//   user_id: String;
//   coupon_id: String;
//   total: Number;
//   status: Boolean;
// }

const OrdersSchema: Schema = new Schema({
  products: [
    {
      product_id: { type: Schema.ObjectId, ref: products },
      product_name: { type: String, required: true },
      product_qty: { type: Number, required: true, min: 1, max: 10 },
      product_price: { type: Number, required: true, min: 1 },
    },
  ],
  user_id: { type: Schema.ObjectId, ref: users, required: true },
  coupon_id: { type: Schema.ObjectId, ref: coupons },
  total: { type: Number, required: true, min: 1 },
  status: { type: Boolean, required: true },
});

export const orders = mongoose.model<OrdersInterface>("orders", OrdersSchema);
