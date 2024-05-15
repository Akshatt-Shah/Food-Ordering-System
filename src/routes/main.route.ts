import mongoose from "mongoose";
import express, { Router } from "express";
import Uroute from "./User.Routes";
import crouter from "./Category.Routes";
import Prouter from "./Products.Routes";
export const mainrouter = Router();

mainrouter.use(express.json());
mainrouter.use(Uroute);
mainrouter.use(crouter);
mainrouter.use(Prouter);
mainrouter.post("/", (req, res) => {
  res.send({ message: "Welcome To the Buddies Cafe" });
});
