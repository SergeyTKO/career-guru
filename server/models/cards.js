import mongoose from 'mongoose'


export default mongoose.model('card', mongoose.Schema({
    question: String,
    answer: [{
        answer: String,
        validity: Boolean
    }, {
        answer: String,
        validity: Boolean
    }, {
        answer: String,
        validity: Boolean
    }, {
        answer: String,
        validity: Boolean
    }],
    count: Number,
    theme: String,
    tags: [String]
}))
