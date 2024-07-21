const hospitalService = require('../services/hospitalService');

const createHospital = async (req, res) => {
    try {
        const hospitalData = req.body;
        const hospital = await hospitalService.createHospital(hospitalData);
        res.status(201).json({ message: 'Hospital created successfully', hospital });
    } catch (error) {
        res.status(500).json({ message: 'Error creating hospital', error: error.message });
    }
};

module.exports = {
    createHospital
};
