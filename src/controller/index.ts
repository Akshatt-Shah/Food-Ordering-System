import { UserController } from "./User.Controller";
const Usercontrollers = new UserController();
import { CategoryController } from "./Category.Controller";
const CategoryControllers = new CategoryController();
import { ProductController } from "./Products.Controller";
const ProductControllers= new ProductController()

export { Usercontrollers, CategoryControllers,ProductControllers };
