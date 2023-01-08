import express, { urlencoded } from "express";
import dotenv from "dotenv";
import { connectPassport } from "./utils/Provider.js";
import session from "express-session";
import passport from "passport";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";
const app = express();

export default app;
dotenv.config({
    path: "./config/config.env",
});

//using middleWares
app.use(cookieParser());
app.use(express.json());
app.use(
    urlencoded({
        extended: true,
    })
);
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(passport.authenticate("session"));
app.use(passport.initialize());
app.use(passport.session());
connectPassport();
//importing routes
import usersRoute from "./routes/users.js";
app.use("/api/v1", usersRoute);
import orderRoute from "./routes/orders.js";
app.use("/api/v1", orderRoute);

//using error middleware
app.use(errorMiddleware);