import { CategorySchema, CouponSchema, OrderSchema, ProductSchema, UserSchema } from "../DataValidation/Data.Validation";
import { Request, Response, NextFunction } from "express";

export class Validation {
  async UserDataValidate(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await UserSchema.validate(req.body);
      next();
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
  async CategoryDataValidate(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await CategorySchema.validate(req.body);
      next();
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
  async CouponDataValidate(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await CouponSchema.validate(req.body);
      next();
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
  async ProductDataValidate(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await ProductSchema.validate(req.body);
      next();
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
  async OrderDataValidate(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await OrderSchema.validate(req.body);
      next();
    } catch (error: any) {
      res.json({ message: error.message, status: false });
    }
  }
}
