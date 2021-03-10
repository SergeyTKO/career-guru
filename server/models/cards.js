import mongoose from 'mongoose'


export default mongoose.model('Card', mongoose.Schema({
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
