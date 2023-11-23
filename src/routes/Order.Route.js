const express = require("express");
const {
  newOrder,
  listOfOrder,
  findOrderById,
} = require("../controllers/Order.Controllers");

const router = express.Router();

router.get("/order", listOfOrder);
router.post("/order", newOrder);
router.get("/order/:id", findOrderById);

module.exports = router;
