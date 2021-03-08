import express from 'express'
import dbConnect from "./seeder/dbConnect.js";
const app = express()

dbConnect()


export default app
