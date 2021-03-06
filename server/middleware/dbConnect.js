import mongoose from "mongoose";
const dbConnect = () => {
  mongoose.connect("mongodb://localhost:27017/careerGuru", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
};
export default dbConnect;
