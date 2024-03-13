const mongoose = require('mongoose');

const BirthModel = new mongoose.Schema({
  informations: {
    nom: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
    },
    prenoms: {
      type: String,
      required: true,
      trim: true
    }, 
    telephone: {
      type: String,
      required: true,
      trim: true
    }, 
    email: {
      type: String,
      required: true,
      trim: true
    }
  },
  extraitPDF: Object,
  mairie: String,
  nbreExtrait: Number,
  coordonnees: {
    nomComplet: {
      type: String,
      required: true,
      trim: true,
    },
    telDestinateur: String,
    villeDestinateur: String,
    rueDestinateur: String
  }
})

module.exports = mongoose.model('BirthAct', BirthModel)