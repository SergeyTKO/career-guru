import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();
const dbConnect = () => {
const atlas = `mongodb+srv://Sergey:mongodbatlas@cluster0.ombdm.mongodb.net/hardSkills`
  mongoose.connect(atlas, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

};

export default dbConnect
