import express from 'express'
import Cards from '../models/cards.js'

const router = express.Router()

router.route('/')
    .get(async (req, res) => {
        const cards = await Cards.find();
        if (cards) {
            res.json(cards);
        }
    });

export default router
