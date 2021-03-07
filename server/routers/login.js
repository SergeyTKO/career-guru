import express from 'express'
const router = express.Router()
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const privateKey = 'secret';



router.post("/", async function (req, res) {
  const { email, password } = req.body;
  let user;
  try {
 
      user = await User.findOne({ email: email });
    
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        if (user.isAdmin) {
          const token = jwt.sign({ _id: user._id }, privateKey, {
            expiresIn: 60 * 60000,
          });
          res
            .cookie("jwt", token, { maxAge: 60 * 60000, httpOnly: true })
            .status(201)
        } else if (!user.isAdmin) {
          const token = jwt.sign({ _id: user._id }, privateKey, {
            expiresIn: 60 * 60000,
          });
          res
            .cookie("jwt", token, { maxAge: 60 * 60000, httpOnly: true })
            .status(201)
        } else {
          res.json({ msg: "Неверный логин или Пароль" });
        }
      }
    } else {
      res.json({ msg: "Неверный Логин или пароль" });
    }
  } catch (err) {
    res.json({ msg: err.msg });
  }
});

export default router;