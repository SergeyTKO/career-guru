import express from "express";
const router = express.Router();
import Users from "../models/users.js";
import Cards from "../models/cards.js";

router.route("/").post(async (req, res) => {
  const { id, user } = req.body;
  const card = await Cards.findById({ _id: id });
  const currentUser = await Users.findById({ _id: user });
  currentUser.solvedCards.push(card);
  await currentUser.save();
  res.json(card)

});

export default router;
