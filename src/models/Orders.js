const mongoose = require("mongoose");

const { Schema } = mongoose;

const OrderSchema = new Schema({
  statu: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
  },
  telephone: {
    type: String,
    lowercase: true,
    trim: true,
  },
  firstRaison: {
    type: String,
    trim: true,
    lowercase: true,
  },
  secondRaison: {
    type: String,
    trim: true,
    lowercase: true,
  },
  threeRaison: {
    type: String,
    trim: true,
    lowercase: true,
  },
  activity: [String],
  capital: {
    type: Number,
    trim: true,
  },
  siege: {
    type: String,
    trim: true,
    lowercase: true,
  },
  banque: {
    type: String,
    trim: true,
    lowercase: true,
  },
  faceIdentity: String,
  dosIdentity: String,
  extraitDeNaissance: String,
  cassierJudiciaire: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
