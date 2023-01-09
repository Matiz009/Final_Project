import express from "express";
import passport from "passport";
import { getAdminUsers, logout, myProfile } from "../controllers/user.js";
import { isAuthenticated, authorizeAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.get(
    "/googleLogin",
    passport.authenticate("google", {
        scope: ["profile"],
    })
);
/*
router.get(
    "/login",
    passport.authenticate("google", {
        scope: ["profile"],
        successRedirect: process.env.FRONTEND_URL,
    })
);
*/
router.get("/googleLogin", (req, res, next) => {
    res.send("Logged IN!");
});

router.get("/me", isAuthenticated, myProfile);
router.get("/logout", logout);

// Admin Routes
router.get("/admin/users", isAuthenticated, authorizeAdmin, getAdminUsers);


export default router;