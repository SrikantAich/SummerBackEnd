const express = require('express');
const router = express.Router();
const hospitalController = require('../controller/hospitalController');

router.post('/addhospital', hospitalController.createHospital);
router.delete('/deletehospital', hospitalController.deleteHospital);
router.put('/edithospital', hospitalController.editHospital);
router.get('/getallhospitals', hospitalController.getAllHospitals);
router.get('/hospitalsbyid/:id', hospitalController.getHospitalById);

module.exports = router;
