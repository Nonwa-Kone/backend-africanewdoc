const BirthAct = require("../models/BirthAct")

module.exports.createOrderBirthAct = async(req, res) => {
  const Birth = new BirthAct(req.body)
  try {
    await Birth.save()
    res.status(201).json("Success")
  } catch (err) {
    res.status(400).json(err)
  }
}

module.exports.readOrderBirthAct = async (req, res) => {
  try {
    const BirthOrder = await BirthAct.find()
    res.status(200).json(BirthOrder)
  } catch (err) {
    res.status(400).json(err)
  }
}