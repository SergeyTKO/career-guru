import express from 'express'
const router = express.Router()
import Cards from '../models/cards.js'

router.route('/')
<<<<<<< HEAD
  .get((req, res) => {
    res.send('main')
    
  })
=======
    .get(async (req, res) => {
        const cards = await Cards.find();
        if (cards) {
            res.json(cards);
        }
    });
>>>>>>> dcc9ba1629c9a52c2905dda4ad2f76f58f929656




export default router
