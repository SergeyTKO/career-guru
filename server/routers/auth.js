import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";

const adminKey = "bullet";
const privateKey = 'secret'

router.post("/", async function (req, res) {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const foundUserByMail = await User.findOne({
    email: req.body.email.toLowerCase(),
  });
  try {
    if (foundUserByMail) {
      res.json({ msg: "Такой пользователь уже существует" });
    } else {
      if (req.body.secretKey === adminKey) {
          
        const admin = new User({
          firstName: req.body.firstName.toLowerCase(),
          lastName: req.body.lastName.toLowerCase(),
          password,
          email: req.body.email.toLowerCase(),
          isAdmin: true,
        });
        await admin.save();
        const token = jwt.sign({ _id: admin._id }, privateKey, {
          expiresIn: 60 * 60000,
        });
        res
          .cookie("jwt", token, { maxAge: 60 * 60000, httpOnly: true })
          .redirect("/admin");
      } else {
        const user = new User({
          firstName: req.body.firstName.toLowerCase(),
          lastName: req.body.lastName.toLowerCase(),
          password,
          email: req.body.email.toLowerCase(),
          score: 0,
          status:'beginner',
          isAdmin: false,
        });
        await user.save();
        const token = jwt.sign({ _id: user._id }, privateKey, {
          expiresIn: 60 * 60000,
        });
        res
          .cookie("jwt", token, { maxAge: 60 * 60000, httpOnly: true })
          .status(201)
      }
    }
  } catch (err) {
  console.log(err);
    res.json({ msg: err.msg })
  }
});

export default router;
