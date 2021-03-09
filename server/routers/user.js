import express from "express";
const router = express.Router();
import Users from "../models/users.js";

router.route("/user").put(async (req, res) => {
  const { count, currentTest, _id } = req.body;

  const editUser = await Users.findById(_id);
  await editUser.updateOne({ score: count, solvedCards: currentTest });
  await editUser.save();
  res.json(editUser._id);
});

export default router;
