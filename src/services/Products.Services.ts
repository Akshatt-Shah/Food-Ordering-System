import { categories, products } from "../models";
import { ProductInterface } from "../interfaces";
import mongoose from "mongoose";

export class ProductServices {
  async CreateProducts(data: ProductInterface) {
    try {
      const categoryid = await categories.findById(data.category_id);
      if (categoryid) {
        const Productdata = await products.create(data);
        return { data: "Product Created Successfully", status: true };
      } else {
        return { message: "Category Is Not Available!!!!!!!!" };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async GetAllProducts() {
    try {
      const Productdata = await products.find({ status: true });
      return { data: Productdata, status: true };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async GetAllProductsForAdmin() {
    try {
      const Productdata = await products.find();
      return { data: Productdata, status: true };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async UpdateProducts(id: any, data: ProductInterface) {
    try {
      const categoryid = await categories.findById(data.category_id);
      if (categoryid) {
        const Productdata = await products.findByIdAndUpdate(id, data);
        return { data: "Product Updated Successfully", status: true };
      } else {
        return { message: "Category Is Not Available!!!!!!!!" };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
  async DeleteProducts(id: any) {
    try {
      const Productdata = await products.findByIdAndUpdate(id, {
        status: false,
      });
      return { data: "Product Deleted Successfully", status: true };
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }
}
