const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("data base is connected");
  } catch (error) {
    console.log("data base is not connected");
  }
};

module.exports = connectDB;