import express from 'express'
const router = express.Router()
import Cards from '../models/cards.js'

router.route('/')
    .get(async (req, res) => {
        const cards = await Cards.find();
        if (cards) {
            res.json(cards);
        }
    });

export default router
