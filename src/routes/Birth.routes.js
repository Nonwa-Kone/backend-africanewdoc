const { createOrderBirthAct, readOrderBirthAct } = require("../controllers/BirthAct");

const router = require("express").Router();

router.post('/create', createOrderBirthAct)
router.get('/read', readOrderBirthAct)

module.exports = router