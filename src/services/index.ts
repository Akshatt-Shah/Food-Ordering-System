import { UserServices } from "./User.Services";
import { CategoryServices } from "./Category.Services";
import { ProductServices } from "./Products.Services";
const users = new UserServices();
const categoriesservice = new CategoryServices();
const productservice = new ProductServices();
export { users, categoriesservice,productservice };
