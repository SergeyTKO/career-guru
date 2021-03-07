import mongoose from 'mongoose'


export default mongoose.model('card', mongoose.Schema({
  question: String,
  answer: String,
  count: Number,
  theme: String,
  tags: [String]
}))
