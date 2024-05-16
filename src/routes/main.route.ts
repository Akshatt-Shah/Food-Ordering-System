import mongoose from "mongoose";
import express, { Router } from "express";
import Uroute from "./User.Routes";
import crouter from "./Category.Routes";
import Prouter from "./Products.Routes";
import CRouter from "./Coupon.Routes";
import ORouter from "./Orders.Routes";
export const mainrouter = Router();

mainrouter.use(express.json());
mainrouter.use(Uroute);
mainrouter.use(crouter);
mainrouter.use(Prouter);
mainrouter.use(CRouter);
mainrouter.use(ORouter);
mainrouter.post("/", (req, res) => {
  res.send({ message: "Welcome To the Buddies Cafe" });
});
