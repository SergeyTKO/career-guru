import express from 'express'
const router = express.Router()
import Cards from '../models/cards.js'

router.route('/admin')
  .post(async (req, res) => {
  
    const { question, answer, count, theme, tags } = req.body
    console.log(req.body);
    await Cards.create({
      questinon: question,
      answer: answer,
      count: count,
      theme: theme,
      tags: tags
    })

    res.redirect('/admin')

  })




export default router
