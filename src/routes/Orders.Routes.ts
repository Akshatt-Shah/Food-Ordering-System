import { Router } from "express";
import { Verify,Validate } from "../middlwares";
import { OrderControllers } from "../controller";

const ORouter = Router();
ORouter.post(
  "/orders/createorder",
  Verify.verifyUserTokenForUser,
  Validate.OrderDataValidate,
  OrderControllers.CreateOrder
);

ORouter.get(
  "/orders/getorderofuser",
  Verify.verifyUserTokenForUser,
  OrderControllers.GetOrderOfUser
);
ORouter.get(
  "/orders/getorderforadmin",
  Verify.verifyUserToken,
  OrderControllers.GetOrderForAdmin
);
ORouter.delete(
  "/orders/deleteorderofuser/:orderid",
  Verify.verifyUserTokenForUser,
  OrderControllers.DeleteOrdersOfUser
);

export default ORouter;
