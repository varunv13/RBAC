import jwt from "jsonwebtoken";
import userModel from "../models/user_model.js";

const verifyToken = async (req, res, next) => {
  let token = req.cookies.token;
  if (!token) {
    return res.status(200).json({ message: "User is not logged in" });
  }

  let decode = jwt.verify(token, process.env.JWT_SECRET);

  const user = await userModel.findById({ _id: decode.id });
  if (!user) {
    return res.status(404).json({ message: "User does not exist" });
  }

  req.user = user;
  next();
};

export default verifyToken;
