import express from 'express'
import Users from '../models/users.js'
import Usercards from "../models/usercards.js";

const router = express.Router()

router.route('/user')
    .get(async (req, res) => {
        const cards = await Usercards.find();
        if (cards) {
            res.json(cards);
        }
    })
    .put(async (req, res) => {
        const {score, solvedCards, user} = req.body
        console.log(score)
        console.log(solvedCards)
        console.log(user)
        const editUser = await Users.findById({_id: user.id});
        await editUser.updateOne({score, solvedCards});
        await editUser.save();
        console.log(editUser)
        res.json(editUser)
    })
    .post(async (req, res) => {
        const {question, answer, theme, company} = req.body;
        const card = await Usercards.create({
            question,
            answer,
            theme,
            company,
        });
        res.json(card);
    })

export default router
