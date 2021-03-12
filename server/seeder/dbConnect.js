import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();
const dbConnect = () => {
  mongoose.connect(`mongodb://localhost/${process.env.DB_NAME}`, {useNewUrlParser: true, useUnifiedTopology: true});
  mongoose.connect(atlas, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

};

export default dbConnect
