const Orders = require("../models/Orders")

module.exports.listOfOrder = (req, res) =>{
    res.send("Vous avez recu une nouvelle commande")
}

module.exports.newOrder = async(req, res) =>{
    const order = new Orders(req.body)
    try {
        await order.save()
        res.status(200).json({order: order, message: 'Nouvelle commande'})
    } catch (error) {
        res.status(500).send(error)
    }
}