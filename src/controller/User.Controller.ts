import { UserInterface } from "../interfaces";
import { Request, Response } from "express";
import { users } from "../services";
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken");
import { newrequest } from "../middlwares/VerifyToken.middlware";
export class UserController {
  async CreaterUser(req: Request, res: Response) {
    try {
      let Userdata: UserInterface = req.body;
      Userdata.password = await bcrypt.hash(Userdata.password, 10);
      console.log(Userdata);
      const data = await users.CreateUserService(Userdata);
      res.status(200).json(data);
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
  async GetUser(req: Request, res: Response) {
    try {
      const data = await users.GetUserService();
      res.status(200).json(data);
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
  async LoginUser(req: Request, res: Response) {
    try {
      const { name, password }: any = req.body;
   
      const data = await users.LoginUserService(name, password);
      res.cookie("UserToken", data.usertoken);
      res.status(200).json(data);
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }

  async UpdateUser(req: Request, res: Response) {
    try {
      let Userdata: UserInterface = req.body;
      Userdata.password = await bcrypt.hash(Userdata.password, 10);
      const token = req.cookies.UserToken;
      const Usertoken = Jwt.verify(token, "your-secret-key");
      console.log(Usertoken.UserToken);
      if (Usertoken.UserToken) {
        const data = await users.UpdateuserService(
          Usertoken.UserToken,
          Userdata
        );
        res.status(200).json(data);
      } else {
        res.status(401).json({
          message: "User Cannot Update Without Theire Login.........",
        });
      }
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
  async DeleteUser(req: Request, res: Response) {
    try {
      const token = req.cookies.UserToken;
      const Usertoken = Jwt.verify(token, "your-secret-key");
      if (Usertoken.UserToken) {
        const data = await users.DeleteuserService(Usertoken.UserToken);
        res.status(200).json(data);
      } else {
        res
          .status(401)
          .json({ message: "Unauthorized User.....", status: false });
      }
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
  async DeleteUserByAdmin(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await users.DeleteuserByAdmin(id);
      res.status(200).json(data);
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
  async ResetPassword(req: newrequest, res: Response) {
    try {
      const id: any = req.userId;
      const { oldpassword, newpassword } = req.body;
      const data = await users.ResetPassword(id, oldpassword, newpassword);
      res.status(200).json(data);
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
}
