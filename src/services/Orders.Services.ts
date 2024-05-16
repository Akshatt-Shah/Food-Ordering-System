import { OrdersInter, OrdersInterface } from "../interfaces";
import { coupons, orders } from "../models";

export class OrderServices {
  async CreateOrder(orderdata: OrdersInter) {
    try {
      if (orderdata.coupon_id) {
        let data: any = await coupons.findById(orderdata.coupon_id);
        if (data) {
          let total: any = orderdata.total;
          total = total - total * (data.percentage / 100);
          orderdata.total = total;
          const datavalue = await orders.create(orderdata);
          return {
            messsge: "Order Created Succcessfully",
            OrderData: datavalue,
            status: true,
          };
        }
      } else {
        const datavalue = await orders.create(orderdata);
        return {
          messsge: "Order Created Succcessfully",
          OrderData: datavalue,
          status: true,
        };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }

  async GetOrders(id: any) {
    try {
      if (id) {
        const data = await orders.find({ user_id: id, status: true });
        return { Data: data, status: true };
      } else {
        return { message: "You Didn't Ordered Yet!!!!!!!!!!!!", status: true };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }

  async GetOrdersForAdmin() {
    try {
      const data = await orders.find();
      if (data) {
        return { Data: data, status: true };
      } else {
        return { message: "No Orders Are Available!!!!!!!!!!!", status: true };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async DeleteOrdersForAdmin(userid: any, orderid: any) {
    try {
      console.log(orderid);
      const data = await orders.find({ user_id: userid });
      if (data) {
        const deletedata = await orders.findByIdAndUpdate(orderid, {
          status: false,
        });
        return { message: deletedata, status: true };
      } else {
        return {
          message:
            "User Cannot Available Or One User Cannot Update Other Record!!!!!!!!!!!!",
          status: true,
        };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
}
