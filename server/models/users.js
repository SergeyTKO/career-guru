import mongoose from 'mongoose'


export default mongoose.model('users', mongoose.Schema({
  avatar: String,
  googleId:  String,
  accessToken: String,
  firstName: String,
  lastName: String,
  password: String,
  email: String,
  status: String,
  score: Number,
  isAdmin: Boolean,
  provider:String
}))
