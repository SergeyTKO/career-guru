import express from "express";
const router = express.Router();
import Users from "../models/users.js";
import Cards from "../models/cards.js";

router.route("/").post(async (req, res) => {
  const { id } = req.body;
  console.log(req.body);
  // const card = await Cards.findOne({ _id:id });
  // res.json(card) 

})

.put(async (req, res) => {
  const {_id,user} = req.body

  // const editUser = await Users.findById({_id: id});
  // await editUser.updateOne({favoriteCards});
  // await editUser.save();
  // console.log(editUser)
  // res.json(editUser)
})

export default router;
