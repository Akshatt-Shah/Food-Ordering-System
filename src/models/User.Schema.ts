import mongoose from "mongoose";
import { Document, Schema } from "mongoose";
import { UserInterface } from "../interfaces";
// export interface UserInterface extends Document {
//   _id?: String;
//   role: String;
//   name: String;
//   password: String;
//   email: String;
//   address: String;
//   phoneno: String;
// }

const USerSchema: Schema = new Schema({
  role: {
    type: String,
    enum: {
      values: ["user", "admin"],
      message: "{values} is not a valid role..",
    },
    required: true,
  },
  name: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phoneno: { type: String, required: true, min: 10, max: 10, unique: true },
});

export const users = mongoose.model<UserInterface>("users", USerSchema);
