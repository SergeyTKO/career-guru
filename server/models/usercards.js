import mongoose from 'mongoose'

export default mongoose.model('usercards', mongoose.Schema({
    question: String,
    answer: String,
    theme: String,
    company: [String]
}))
