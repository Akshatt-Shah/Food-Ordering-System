import * as Yup from "yup";
import { products } from "../models";

export const UserSchema = Yup.object().shape({
  role: Yup.string().required(),
  name: Yup.string().required(),
  password: Yup.string()
    .required()
    .matches(
      /^[a-zA-Z][a-z0-9]{4,}$/,
      "Password Must Be 4 character Long And First Character Must Be Capital"
    ),
  email: Yup.string()
    .matches(/^[a-z0-9]+@[a-z]+\.[a-z]{3,}$/)
    .required(),
  address: Yup.string().required(),
  phoneno: Yup.string().min(10).max(11).required(),
});

export const CategorySchema = Yup.object().shape({
  name: Yup.string().required(),
});

export const ProductSchema = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.number().required(),
  status: Yup.boolean().required(),
  category_id: Yup.string().required(),
});

export const CouponSchema = Yup.object().shape({
  name: Yup.string().required(),
  percentage: Yup.number().required(),
  status: Yup.string().required(),
});

export const OrderSchema = Yup.object().shape({
  products: Yup.array()
    .of(
      Yup.object().shape({
        product_id: Yup.string().required("Product ID is required"),
        product_name: Yup.string().required("Product name is required"),
        product_qty: Yup.number()
          .required("Product quantity is required")
          .min(1, "Product quantity must be at least 1"),
        product_price: Yup.number().required("Product price is required"),
      })
    )
    .required("Products are required"),
  user_id: Yup.string(),
  coupon_id: Yup.string(),
  total: Yup.number().required(),
  status: Yup.boolean(),
});
