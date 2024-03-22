const mongoose = require('mongoose');

const cassierSchema = new mongoose.Schema({
  extrait: {
    type: String, 
    required: true,
    trim: true
  }
})


module.exports = mongoose.model('Cassier', cassierSchema)