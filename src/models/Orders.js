const mongoose = require('mongoose')

const { Schema } = mongoose

const OrderSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    telephone: {
        type: String,
        lowercase: true,
        trim: true
    }, 
    firstRaison: {
        type: String,
        trim: true,
        lowercase: true
    },
    secondRaison: {
        type: String,
        trim: true,
        lowercase: true
    },
    threeRaison: {
        type: String,
        trim: true,
        lowercase: true
    },
    activity: [String],
    capital: {
        type: Number,
        trim: true
    },
    adresseOfSiege: {
        type: String,
        trim: true,
        lowercase: true
    },
    banque: {
        type: String,
        trim: true,
        lowercase: true
    }

})

module.exports = mongoose.model('Order', OrderSchema)