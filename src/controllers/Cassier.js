const Cassiers = require("../models/Cassiers")

module.exports.createCassierOrder = (req, res) => {
  Cassiers.create({extrait: req.file.filename})
    .then(() => res.status(201).json("Success") )
    .catch((error) => res.status(400).json(error))
}

module.exports.findAllOrderCassier = (req, res) => {
  Cassiers.find({})
    .then((cassiers)=> res.status(200).json(cassiers))
    .catch(error=> res.status(400).json(error))
}