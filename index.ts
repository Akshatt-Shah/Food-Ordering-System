import express, { urlencoded } from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import { startServer } from "./src/Server/server";

startServer();
