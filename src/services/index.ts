import { UserServices } from "./User.Services";
import { CategoryServices } from "./Category.Services";
import { ProductServices } from "./Products.Services";
import { CouponServices } from "./Coupon.Services";
import { OrderServices } from "./Orders.Services";
const users = new UserServices();
const categoriesservice = new CategoryServices();
const productservice = new ProductServices();
const couponservices = new CouponServices();
const orderservices = new OrderServices();
export {
  users,
  categoriesservice,
  productservice,
  couponservices,
  orderservices,
};
