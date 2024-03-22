const router = require("express").Router();
const { createOrderBirthAct, readOrderBirthAct, deleteBirthAct, deleteBirthActAll } = require("../controllers/BirthAct");
const multer = require('../middleware/config-multer');


router.post('/create', multer,createOrderBirthAct)
router.get('/read', readOrderBirthAct)
router.delete('/delete/:id', deleteBirthAct)

module.exports = router