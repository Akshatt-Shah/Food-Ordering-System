import { ProductInterface } from "../interfaces";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { productservice } from "../services";
export class ProductController {
  async CreateProduct(req: Request, res: Response) {
    try {
      const data: ProductInterface = req.body;
      const Product = await productservice.CreateProducts(data);
      res.status(200).json(Product);
    } catch (error: any) {
      res.status(400).json({
        message: "Product Not Added Successfully!!!!!!!!!",
        status: false,
      });
    }
  }
  async GetAllProduct(req: Request, res: Response) {
    try {
      const Product = await productservice.GetAllProducts();
      res.status(200).json(Product);
    } catch (error: any) {
      res.status(400).json({
        message: "Product Not Retrieved Successfully!!!!!!!!!",
        status: false,
      });
    }
  }
  async GetAllProductForAdmin(req: Request, res: Response) {
    try {
      const Product = await productservice.GetAllProductsForAdmin();
      res.status(200).json(Product);
    } catch (error: any) {
      res.status(400).json({
        message: "Product Not Retrieved Successfully!!!!!!!!!",
        status: false,
      });
    }
  }
  async UpdateProduct(req: Request, res: Response) {
    try {
      const data: ProductInterface = req.body;
      const { id } = req.params;
      const Product = await productservice.UpdateProducts(id, data);
      res.status(200).json(Product);
    } catch (error: any) {
      res.status(400).json({
        message: "Product Not Updated Successfully!!!!!!!!!",
        status: false,
      });
    }
  }
  async DeleteProduct(req: Request, res: Response) {
    try {
      
      const { id } = req.params;
      const Product = await productservice.DeleteProducts(id);
      res.status(200).json(Product);
    } catch (error: any) {
      res.status(400).json({
        message: "Product Not Deleted Successfully!!!!!!!!!",
        status: false,
      });
    }
  }
}
