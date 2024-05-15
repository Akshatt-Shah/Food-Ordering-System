import mongoose, { Document, Schema } from "mongoose";
import { CouponInterface } from "../interfaces";
// export interface CouponInterface extends Document {
//   _id?: String;
//   name: String;
//   percentage: Number;
//   status: Boolean;
// }

const CouponSchema: Schema = new Schema({
  name: { type: String, required: true },
  percentage: { type: String, required: true },
  status: { type: Boolean, required: true },
});

export const coupons = mongoose.model<CouponInterface>("coupons", CouponSchema);
