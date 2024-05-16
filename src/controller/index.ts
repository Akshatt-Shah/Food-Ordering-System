import { UserController } from "./User.Controller";
const Usercontrollers = new UserController();
import { CategoryController } from "./Category.Controller";
const CategoryControllers = new CategoryController();
import { ProductController } from "./Products.Controller";
const ProductControllers= new ProductController()
import { CouponController } from "./Coupon.Controller";
const CouponControllers=  new CouponController();
import { OrderController } from "./Orders.Controller";
const OrderControllers = new OrderController()

export { Usercontrollers, CategoryControllers,ProductControllers,CouponControllers,OrderControllers };
