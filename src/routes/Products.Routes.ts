import { Router } from "express";
import { ProductControllers } from "../controller";
import { Verify, Validate } from "../middlwares";

const Prouter = Router();
Prouter.post(
  "/products/createproduct",
  Verify.verifyUserToken,
  Validate.ProductDataValidate,
  ProductControllers.CreateProduct
);
Prouter.put(
  "/products/updateproduct/:id",
  Verify.verifyUserToken,
  Validate.ProductDataValidate,
  ProductControllers.UpdateProduct
);
Prouter.delete(
  "/products/deleteproduct/:id",
  Verify.verifyUserToken,
  ProductControllers.DeleteProduct
);
Prouter.get("/products/getallproduct", ProductControllers.GetAllProduct);

Prouter.get(
  "/products/getallproductforfilter",
  ProductControllers.GetAllProductforFilter
);
Prouter.get(
  "/products/getallproductforadmin",
  Verify.verifyUserToken,
  ProductControllers.GetAllProductForAdmin
);
export default Prouter;
