const express = require('express')
const { newOrder, listOfOrder } = require('../controllers/Order.Controllers')

const router = express.Router()

router.get('/order', listOfOrder)
router.post('/order', newOrder)

module.exports = router