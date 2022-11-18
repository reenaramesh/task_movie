const mongoose= require("mongoose");



const MONGOURI ='mongodb://localhost:27017/movie';
//MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/newdashboard',
const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
 
InitiateMongoServer();