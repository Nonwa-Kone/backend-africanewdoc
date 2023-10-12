const mongoose = require('mongoose');



async function connectDB() {
  await mongoose.connect(process.env.MONGODB_URL);
  console.log('Base de donnée connecté');
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = connectDB