import express from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
const app = express();

export default app;
dotenv.config({
    path: "./config/config.env",
});
connectPassport();
//importing routes
import usersRoute from "./routes/users.js";
app.use("/api/v1", usersRoute);