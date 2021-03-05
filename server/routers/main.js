import express from 'express'
const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.render('main')
    
  })




export default router
