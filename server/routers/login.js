import express from "express";
const router = express.Router();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/users.js";

const privateKey = "secret";

router.post("/", async function (req, res) {
  console.log(req.body);
  const { email, password } = req.body;
  let user;
  try {
    user = await User.findOne({ email });
    if (user) {
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        if (user.isAdmin) {
          const token = jwt.sign({ _id: user._id }, privateKey, {
            expiresIn: 60 * 60000,
          });
          res.json({
            token,
            user: {
              id: user._id,
              email: user.email,
              avatar: user.avatar,
              firstName: user.firstName,
              lastName: user.lastName,
              status: user.status,
              score: user.score,
              isAdmin: true,
              solvedCards: user.solvedCards,
            },
          });
        } else if (!user.isAdmin) {
          const token = jwt.sign({ _id: user._id }, privateKey, {
            expiresIn: 60 * 60000,
          });

          res.json({
            token,
            user: {
              id: user._id,
              email: user.email,
              avatar: user.avatar,
              firstName: user.firstName,
              lastName: user.lastName,
              status: user.status,
              score: user.score,
              isAdmin: false,
              solvedCards: user.solvedCards,
            },
          });
        }
      } else {
        res.json({ msg: "Неверный логин или пароль" });
      }
    } else {
      res.json({ msg: "Неверный логин или пароль" });
    }
  } catch (err) {
    res.json({ msg: err.msg });
  }
});

export default router;
