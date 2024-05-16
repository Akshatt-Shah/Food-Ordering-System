import { Request, Response } from "express";
import { orderservices } from "../services";
import { OrdersInter, OrdersInterface } from "../interfaces";
import { newrequest } from "../middlwares/VerifyToken.middlware";
export class OrderController {
  async CreateOrder(req: newrequest, res: Response) {
    try {
      const user = req.userId;
      let orderdata: OrdersInter = req.body;
      orderdata.status = true;
      orderdata.user_id = user;
      //   console.log(orderdata);
      const data = await orderservices.CreateOrder(orderdata);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async GetOrderOfUser(req: newrequest, res: Response) {
    try {
      const id = req.userId;
      const data = await orderservices.GetOrders(id);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async GetOrderForAdmin(req: newrequest, res: Response) {
    try {
      const data = await orderservices.GetOrdersForAdmin();
      res.status(200).json(data);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
  async DeleteOrdersOfUser(req: newrequest, res: Response) {
    try {
      const id = req.userId;
      const { orderid } = req.params;
      const data = await orderservices.DeleteOrdersForAdmin(id, orderid);
      res.status(200).json(data);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}
