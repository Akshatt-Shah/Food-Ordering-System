import mongoose, { startSession } from "mongoose";
import { categories } from "../models";
import { CategoryInterface } from "../interfaces";

export class CategoryServices {
  async CreateCategoryService({ name }: CategoryInterface): Promise<any> {
    const data: CategoryInterface = await categories.create({ name });
    // data.save();
    return { user: data, status: true };
  }
  async GetAllCategoryService(): Promise<any> {
    const data: CategoryInterface[] = await categories.find();

    return { user: data, status: true };
  }
    async getallcategorysbysearch(searchTerm: any): Promise<any> {
      const regex = new RegExp(searchTerm.search, "i"); // 'i' makes the search case-insensitive
      const bookscategory = await categories.find({
        $or: [{ name: regex }],
      });
      return { bookscategory: bookscategory, status: true };
    }
    async getallcategoriesbypage(pageno: any): Promise<any> {
      const record = 5;
      const skip = (pageno - 1) * record;
      const data: Object | [] = await categories.find().skip(skip).limit(record);

      return { user: data, status: true };
    }

  async UpdateCategoryService(
    id: any,
    { name }: CategoryInterface
  ): Promise<any> {
    const data: CategoryInterface | null = await categories.findByIdAndUpdate(
      id,
      {
        name,
      }
    );
    return { user: data, status: true };
  }
  async DeleteCategoryService(id: any): Promise<any> {
    let session: mongoose.ClientSession | null = null;
    session = await mongoose.startSession();
    session.startTransaction();
    const data: CategoryInterface | null = await categories.findByIdAndDelete(
      id
    );
    console.log(data);
    if (data) {
      return { message: "Category Deleted Successfully.....", status: false };
    } else {
      return {
        message: "Category Does Not  Deleted Successfully.....",
        status: false,
      };
    }
    // if (data !== null) {
    //   await Bookdetail.deleteMany({ category: data._id });

    //   await Books.deleteMany({ _id: data._id });

    //   await session.commitTransaction();
    //   session.endSession();

    //   return { user: data, status: true };
    // } else {
    //   return { message: "Book Not Deleted", status: false };
    // }
  }
}
