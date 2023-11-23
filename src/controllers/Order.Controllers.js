const Orders = require("../models/Orders");

module.exports.listOfOrder = async (req, res) => {
  try {
    const listOfOrders = await Orders.find();
    res.status(200).json({
      order: listOfOrders,
      message: "liste des commande de création d'entreprise",
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.newOrder = async (req, res) => {
  const order = new Orders(req.body);
  try {
    await order.save();
    res.status(200).json({ order: order, message: "Nouvelle commande" });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports.findOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Orders.findById({ _id: id });
    res.status(200).json(order);
  } catch (error) {
    res.status(500).send(error);
  }
};
