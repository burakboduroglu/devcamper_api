const colors = require("colors");

const mongoose = require("mongoose");
try {
  const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.green.bold);
  };

  module.exports = connectDB;
} catch (error) {
  console.error(`Unable to connect to the database ${error}`.red);
}
