import {Router} from "express";
import { signup, login } from "../controllers/authController.js";
import { verifyUser } from "../middlewares/authMiddleware.js";

const router = Router();

// SIGNUP route
router.post("/signup", signup);
// LOGIN route
router.post("/login", login);
// verifyUser route
router.get("/me", verifyUser, (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    });
});

export default router;
