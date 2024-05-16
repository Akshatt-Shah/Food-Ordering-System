import { Router } from "express";
import { CouponControllers } from "../controller";
import { Verify,Validate } from "../middlwares";

const CRouter = Router();
CRouter.post(
  "/coupons/createcoupons",
  Verify.verifyUserToken,
  Validate.CouponDataValidate,
  CouponControllers.CreateCouponController
);

CRouter.get("/coupons/getcoupons", CouponControllers.GetCouponController);

CRouter.get(
  "/coupons/getcouponsforadmin",
  Verify.verifyUserToken,
  CouponControllers.GetCouponControllerForAdmin
);

CRouter.put(
  "/coupons/updatecoupons/:id",
  Verify.verifyUserToken,
  Validate.CouponDataValidate,
  CouponControllers.UpdateCouponController
);

CRouter.delete(
  "/coupons/deletecoupons/:id",
  Verify.verifyUserToken,
  CouponControllers.DeleteCouponController
);

export default CRouter;
