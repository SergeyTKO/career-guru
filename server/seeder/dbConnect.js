import mongoose from 'mongoose'
import Cards from '../models/cards.js'
import Users from '../models/users.js'



const dbConnect = () => {
  mongoose.connect('mongodb+srv://Sergey:mongodbatlas@cluster0.ombdm.mongodb.net/hardSkills?retryWrites=true&w=majority', {
    // mongoose.connect('mongodb://localhost/TestBase',{
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

};




async function addUser() {
  Users.create({
    firstName: 'Ivan',
    lastName: 'Ivanov',
    password: '123',
    email: 'ivanov@ivanov.com',
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

// addUser()
// addCard()

export default dbConnect
