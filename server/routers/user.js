import express from 'express'
import Users from '../models/users.js'

const router = express.Router()

router.route('/user')
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
    });

export default router
