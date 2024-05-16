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
  async GetAllProducts(catid: any) {
    try {
      if (catid) {
        const Productdata = await products.find({
          category_id: catid,
          status: true,
        });
        return { data: Productdata, status: true };
      } else {
        const Productdata = await products.find({
          status: true,
        });
        return { data: Productdata, status: true };
      }
    } catch (error: any) {
      return { message: error.message, status: false };
    }
  }

  async GetAllProductsForFilter(filters: any) {
    try {
      const regex = new RegExp(filters.search, "i"); // 'i' makes the search case-insensitive
      let matchObject: any = {};
      let matchObjectt: any = {};
      const pageno = Number(filters.pageno) || 1;
      const limit = Number(filters.limit) || 5;
      let skip = (pageno - 1) * limit;

      if (filters.category) {
        if (typeof filters.category === "string") {
          matchObjectt["categoryInfo.name"] = {
            $regex: filters.category,
            $options: "i",
          };
        }
      }

      if (filters.search) {
        matchObject = {
          $or: [
            { name: regex },
            { status: regex },
            { "categoryInfo.name": regex },
          ],
        };
      }

      if (filters.minprice) {
        matchObject["price"] = { $gte: Number(filters.minprice) };
      }

      if (filters.maxprice) {
        matchObject["price"] = {
          ...matchObject["price"],
          $lte: Number(filters.maxprice),
        };
      }
      console.log(matchObject);
      const Productdata = await products.aggregate([
        {
          $sort: {
            price: 1,
          },
        },
        {
          $lookup: {
            from: "categories",
            localField: "category_id",
            foreignField: "_id", // Assuming the "_id" field in the "Books" collection is used as the unique identifier
            as: "categoryInfo",
          },
        },
        {
          $match: matchObjectt,
        },
        {
          $match: { status: true },
        },
        {
          $match: matchObject,
        },
        {
          $skip: skip,
        },
        {
          $limit: limit,
        },
        {
          $project: {
            name: 1,
            category: { $arrayElemAt: ["$categoryInfo.name", 0] },
            price: 1,
          },
        },
      ]);
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
