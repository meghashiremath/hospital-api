// const mongoose = require('mongoose')
// mongoose.connect('mongodb+srv://raginih1012:7IdbyoIDAEE22Fx8@cluster0.smhgyv1.mongodb.net/?retryWrites=true&w=majority')

// .then(()=>{console.log('connected to db')})
// .catch((error)=>{console.log('error in connecting to db',error)})
const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      const conn = await mongoose.connect('mongodb+srv://raginih1012:7IdbyoIDAEE22Fx8@cluster0.smhgyv1.mongodb.net/?retryWrites=true&w=majority');

      console.log("MongoDB Connection Established");
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};
module.exports = connectDB;
