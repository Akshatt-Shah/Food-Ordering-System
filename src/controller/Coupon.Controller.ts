import { couponservices } from "../services";
import { Request, Response } from "express";
import { CouponInterface } from "../interfaces";

export class CouponController {
  async CreateCouponController(req: Request, res: Response) {
    try {
      const data: CouponInterface = req.body;
      const coupondata = await couponservices.CreateCoupon(data);
      res.status(200).json(coupondata);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async GetCouponController(req: Request, res: Response) {
    try {
      const coupondata = await couponservices.GetCoupon();
      res.status(200).json(coupondata);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async GetCouponControllerForAdmin(req: Request, res: Response) {
    try {
      const coupondata = await couponservices.GetCouponForAdmin();
      res.status(200).json(coupondata);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async UpdateCouponController(req: Request, res: Response) {
    try {
      const data: CouponInterface = req.body;
      const { id } = req.params;
      const coupondata = await couponservices.UpdateCoupon(id, data);
      res.status(200).json(coupondata);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
  async DeleteCouponController(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const coupondata = await couponservices.DeleteCoupon(id);
      res.status(200).json(coupondata);
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: false });
    }
  }
}
