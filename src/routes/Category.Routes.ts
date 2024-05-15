import { Router } from "express";
import { CategoryControllers } from "../controller";
import { Verify } from "../middlwares";

const crouter = Router();
crouter.post(
  "/category/createcategory",
  Verify.verifyUserToken,
  CategoryControllers.CreateCategory
);
crouter.put(
  "/category/updatecategory/:id",
  Verify.verifyUserToken,
  CategoryControllers.UpdateCategory
);
crouter.delete(
  "/category/deletecategory/:id",
  Verify.verifyUserToken,
  CategoryControllers.DeleteCategory
);
crouter.get("/category/getAllcategory", CategoryControllers.GetAllCategory);
crouter.get(
  "/category/getAllcategoryByPageNo",
  CategoryControllers.getbooksbypageno
);
crouter.get(
  "/category/getAllcategoryBySearcho",
  CategoryControllers.getbookscategorybysearch
);

export default crouter;
