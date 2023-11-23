const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.MONGODB_LOCAL);
  console.log("Base de donnée connecté");
}

module.exports = connectDB;
