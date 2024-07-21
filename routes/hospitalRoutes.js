const express = require('express');
const router = express.Router();
const hospitalController = require('../controller/hospitalController');

router.post('/create', hospitalController.createHospital);

module.exports = router;
