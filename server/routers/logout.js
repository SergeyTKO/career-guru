import express from "express";
const router = express.Router();
import cookieCleaner from '../middleware/cookieCleaner.js'

router.get('/', cookieCleaner, function(req,res){
    res.redirect('/login')
})
export default router
