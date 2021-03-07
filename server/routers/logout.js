import express from "express";
const router = express.Router();
import cookieCleaner from '../middleware/cookieCleaner.js'

router.get('/', cookieCleaner, function(req,res){
    res.status(201).end();
})
export default router
