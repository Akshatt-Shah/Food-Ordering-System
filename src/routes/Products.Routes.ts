import { Router } from "express";
import { ProductControllers } from "../controller";
import { Verify } from "../middlwares";

const Prouter = Router();
Prouter.post(
  "/products/createproduct",
  Verify.verifyUserToken,
  ProductControllers.CreateProduct
);
Prouter.put(
  "/products/updateproduct/:id",
  Verify.verifyUserToken,
  ProductControllers.UpdateProduct
);
Prouter.delete(
  "/products/deleteproduct/:id",
  Verify.verifyUserToken,
  ProductControllers.DeleteProduct
);
Prouter.get("/products/getallproduct", ProductControllers.GetAllProduct);
Prouter.get(
  "/products/getallproductforadmin",
  Verify.verifyUserToken,
  ProductControllers.GetAllProductForAdmin
);
export default Prouter;
