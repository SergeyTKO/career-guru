import mongoose from 'mongoose'
import Cards from '../models/cards.js'
import Users from '../models/users.js'
import dotenv from 'dotenv';

dotenv.config();
const dbConnect = () => {
  const atlas = `mongodb+srv://${process.env.LOGIN}:${process.env.PASSWORD}@cluster0.ombdm.mongodb.net/${process.env.DB_NAME}`
  mongoose.connect(atlas, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

};


async function addUser() {
  Users.create({
    firstName: 'Fedor',
    lastName: 'Fedorov',
    password: '123',
    email: 'fedor@ivanov.com',
    status: 'trainee',
    score: 100,
    isAdmin: false
  })
}

async function addCard() {
  Cards.create({
    question: 'the most popular language?',
    answer: 'JS',
    count: 300,
    theme: 'for trainee'
  })
}

addUser()
// addCard()

export default dbConnect
