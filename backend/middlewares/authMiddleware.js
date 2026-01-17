import jwt from "jsonwebtoken";
import User from "../model/UserModel.js";

export const verifyUser = async (req, res, next) => {
    try {
        // Read the token from cookies
        const token = req.cookies.token;

        if (!token) { 
            return res.status(401).json({
                success: false,
                message: "No token provided",
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);

        // Find the user in the database
        const user = await User.findById(decoded.id).select("-password");

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User not found",
            });
        }

        // Attach the user to the request object
        req.user = user;

        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: "Invalid or expired token",
        });
    }
};