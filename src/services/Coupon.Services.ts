import { coupons } from "../models";
import { CouponInterface } from "../interfaces";
import { Request, Response } from "express";

export class CouponServices {
  async CreateCoupon(data: CouponInterface) {
    try {
      const coupondata = await coupons.create(data);
      return { data: coupondata, status: true };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async GetCoupon() {
    try {
      const coupondata = await coupons.find({ status: true });
      if (coupondata.length !== null) {
        return { data: coupondata, status: true };
      } else {
        return { message: "Coupons Are Not Available", status: true };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async GetCouponForAdmin() {
    try {
      const coupondata = await coupons.find();
      if (coupondata.length !== null) {
        return { data: coupondata, status: true };
      } else {
        return { message: "Coupons Are Not Available", status: true };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async UpdateCoupon(id: any, data: CouponInterface) {
    try {
      const coupondata = await coupons.findByIdAndUpdate(id, data);
      return { data: coupondata, status: true };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async DeleteCoupon(id: any) {
    try {
      const coupondata = await coupons.findByIdAndUpdate(id, { status: false });
      if (coupondata) {
        return { data: "Coupon Deleted Successfully", status: true };
      } else {
        return { data: "Coupon Not Available ", status: true };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
}
