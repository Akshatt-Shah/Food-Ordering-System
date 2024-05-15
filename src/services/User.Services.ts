import { UserInterface } from "../interfaces";
import { users } from "../models";
import mongoose from "mongoose";
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
export class UserServices {
  async CreateUserService(Userdata: UserInterface) {
    try {
      const data = await users.create(Userdata);
      return { Data: "User Created Successfully", status: true };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async GetUserService() {
    try {
      const data = await users.find();
      if (data.length > 0) {
        return { Data: data, status: true };
      } else {
        return { message: "User Not Available", status: false };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async LoginUserService(name: any, password: any) {
    try {
      const data = await users.find({ name: name });
      if (data) {
        console.log(data);
        const compare = await bcrypt.compare(password, data[0].password);
        if (compare) {
          const token = await Jwt.sign(
            { UserToken: data[0]._id },
            "your-secret-key",
            {
              expiresIn: "12h",
            }
          );
          return {
            Message: "user Login Successfully",
            Status: true,
            usertoken: token,
          };
        } else {
          return { Message: "User Login Unsuccessful", Status: false };
        }
      } else {
        return { Message: "User Not  Available", Status: false };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }

  async UpdateuserService(id: String, userdata: UserInterface) {
    const data = await users.findByIdAndUpdate(id, userdata);
    if (data) {
      return { Message: "user Updated Successfully", Status: true };
    } else {
      return {
        message: "User Not Updated Please Provide Proper data",
        status: false,
      };
    }
  }
  async DeleteuserService(id: String) {
    const data = await users.findByIdAndDelete(id);
    if (data) {
      return { Message: "user Deleted Successfully", Status: true };
    } else {
      return {
        message: "User Not Deleted Please Provide Proper data",
        status: false,
      };
    }
  }
  async DeleteuserByAdmin(id: String) {
    const data = await users.findByIdAndDelete(id);
    if (data) {
      return { Message: "user Deleted Successfully", Status: true };
    } else {
      return {
        message: "User Not Deleted Please Provide Proper data",
        status: false,
      };
    }
  }
}
