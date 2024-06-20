require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove useCreateIndex and useFindAndModify options
      // useCreateIndex: true,
      // useFindAndModify: false
    });
    console.log(`MongoDb server connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`MongoDb server connection error: ${error}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDb;
