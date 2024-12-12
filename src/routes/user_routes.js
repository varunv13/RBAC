import { Router } from "express";
import verifyToken from "../middlewares/authMiddleware.js";
import authorize from "../middlewares/authorizedRoles.js";

const router = Router();

router.get("/admin", verifyToken, authorize("admin"), (req, res) => {
  return res.status(200).json({ message: "Welcome Admin" });
});

router.get(
  "/manager",
  verifyToken,
  authorize("admin", "manager"),
  (req, res) => {
    return res.status(200).json({ message: "Welcome Manager" });
  }
);

router.get(
  "/user",
  verifyToken,
  authorize("admin", "manager", "user"),
  (req, res) => {
    return res.status(200).json({ message: "Welcome User" });
  }
);

export default router;
