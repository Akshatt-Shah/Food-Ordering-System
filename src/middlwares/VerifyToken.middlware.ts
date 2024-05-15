const jwt = require("jsonwebtoken");
import { Request, Response, NextFunction } from "express";
import { users } from "../models";
import { UserInterface } from "../interfaces";

export class VerifyToken {
  async verifyUserToken(req: Request, res: Response, next: NextFunction) {
    try {
      const Usertoken = req.cookies.UserToken;

      const usertoken = jwt.verify(Usertoken, "your-secret-key");
      //   console.log(usertoken.UserToken);
      const data: any | null = await users.find({ _id: usertoken.UserToken });
      console.log(data);
      if (data[0].role === "admin") {
        next();
      } else {
        res.status(400).json({
          message: "Only Admin Can make the Changes......",
          status: false,
        });
      }
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
}
