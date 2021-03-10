import express from "express";
const router = express.Router();
import Cards from "../models/cards.js";

router
  .route("/admin")
  .post(async (req, res) => {
    const { question, answer, count, theme, tags } = req.body;
    const card = await Cards.create({
      question,
      answer,
      count,
      theme,
      tags,
    });

    res.json(card);
  })

  .delete(async (req, res) => {
    const { id } = req.body;
    const deleteCard = await Cards.findByIdAndDelete({ _id: id });
    res.json(deleteCard.id);
  });

export default router;
