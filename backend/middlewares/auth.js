export const isAuthenticated = (req, res, next) => {
    const token = req.cookies["connect.sid"];
    console.log(token);
    if (!token) {
        return next(new Error("Nice"));
    }
    next();
};