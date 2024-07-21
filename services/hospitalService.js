const Hospital = require('../models/hospitalModel');

const createHospital = async (hospitalData) => {
    const hospital = new Hospital(hospitalData);
    return await hospital.save();
};

module.exports = {
    createHospital
};
