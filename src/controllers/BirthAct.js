const fs = require('fs');
const BirthAct = require("../models/BirthAct")

module.exports.createOrderBirthAct = async(req, res) => {
  console.log(req.file);
  const Birth = new BirthAct({
    ...req.body, 
    extraitPDF: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  })
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

module.exports.deleteBirthAct = (req, res) => {
    BirthAct.findOne({_id: req.params.id})
      .then((Birth)=> {
        const filename = Birth.extraitPDF.split('/images/')[1];
        fs.unlink(`images/${filename}`, ()=> {
          BirthAct.deleteOne({_id: req.params.id}) 
            .then(()=> res.status(200).json("Success"))
            .catch(error => res.status(401).json(error))
        })
      })
      .catch(error => res.status(401).json(error))
}