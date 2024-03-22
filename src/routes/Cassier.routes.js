const express = require('express');
const { createCassierOrder, findAllOrderCassier } = require('../controllers/Cassier');
const multer = require('../middleware/config-multer')
const router = express.Router()

router.post('/create', multer, createCassierOrder)
router.get('/read', findAllOrderCassier)

module.exports = router;