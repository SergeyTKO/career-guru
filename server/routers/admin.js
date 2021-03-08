import express from 'express'
const router = express.Router()
import Cards from '../models/cards.js'

router.route('/admin')
  .post(async (req, res) => {
  
    const { question, answer, count, theme, tags } = req.body
    // console.log(req.body);
    const card = await Cards.create({
      question,
      answer,
      count,
      theme,
      tags,
    })

    res.json(card)

  })

  .delete(async(req,res)=>{
    const{_id}=req.body
    const deleteCard = await Cards.findByIdAndDelete({_id:_id})
    console.log(deleteCard);
    res.json(deleteCard._id)
  })




export default router
