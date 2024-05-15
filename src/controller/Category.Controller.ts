import { categories } from "../models";
import { CategoryInterface } from "../interfaces";
import { Request, Response } from "express";
import { categoriesservice } from "../services";
const jwt = require("jsonwebtoken");
// import { bookcategoryservices } from "../services/bookcategoryservices";
// const bookservice = new bookcategoryservices();

export class CategoryController {
  async CreateCategory(req: Request, res: Response) {
    try {
      // console.log("create User")
      let { name }: CategoryInterface = req.body; // Assuming req.body contains pname and price
      console.log("name");
      if (name !== undefined && name.valueOf().length > 0) {
        const book = await categoriesservice.CreateCategoryService({ name });

        console.log("Category Added Successfully:", book);
        res.json({ message: "Category Added Successfully", status: true });
      } else {
        res
          .status(400)
          .json({ message: "Please Provide Value In Body", status: false });
      }
    } catch (err: any) {
      res.status(400).json({
        message: err.message,
        status: false,
      });
    }
  }

  async GetAllCategory(req: Request, res: Response) {
    try {
      const books = await categoriesservice.GetAllCategoryService();
      if (books.length !== 0) {
        res.json(books);
      } else {
        res
          .status(400)
          .json({ message: "Categories Not Available", status: true });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error Occured During Get Request ", status: false });
    }
  }
    async getbookscategorybysearch(req: Request, res: Response) {
      try {
        const searchTerm: any = req.query;
        const books = await categoriesservice.getallcategorysbysearch(searchTerm);
        if (books.length !== 0) {
          res.json(books);
        } else {
          res.status(400).json({ message: "Books Not Available", status: true });
        }
      } catch (error) {
        res
          .status(500)
          .json({ message: "Error Occured During Get Request ", status: false });
      }
    }
  async getbooksbypageno(req: Request, res: Response) {
    try {
      const { pageno } = req.query;

      const books = await categoriesservice.getallcategoriesbypage(pageno);
      if (books.length !== 0) {
        res.json(books);
      } else {
        res
          .status(400)
          .json({ message: "Category Not Available", status: true });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error Occured During Get Request ", status: false });
    }
  }

  async UpdateCategory(req: Request, res: Response) {
    try {
      // console.log("create User")
      const id = req.params.id;
      let { name }: CategoryInterface = req.body; // Assuming req.body contains pname and price
      if (name !== undefined && name.valueOf().length > 0) {
        const books = await categoriesservice.UpdateCategoryService(id, {
          name,
        });

        console.log("Category Added Successfully:");
        res.json({ message: "Category Updated Successfully", status: true });
      } else {
        res
          .status(400)
          .json({ message: "Please Provide Value In Body", status: false });
      }
    } catch (err) {
      console.error("Error adding user:", err);
      res.status(500).json({
        message: "Category Does Not Updated Please Try Again!!!!!!",
        status: false,
      });
    }
  }
  async DeleteCategory(req: Request, res: Response) {
    try {
      // console.log("create User")
      const id = req.params.id;

      const books = await categoriesservice.DeleteCategoryService(id);

      console.log("Category Deleted Successfully:");
      res.json(books);
    } catch (err) {
      console.error("Error Deleting Category:", err);
      res.status(500).json({
        message: "Category Does Not Deleted Please Try Again!!!!!!",
        status: false,
      });
    }
  }
}
