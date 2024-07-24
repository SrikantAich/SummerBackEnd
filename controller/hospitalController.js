const mongoose = require('mongoose');
const Hospital = require('../models/hospitalModel');

const createHospital = async (req, res) => {
    try {
        const hospital = new Hospital(req.body);
        await hospital.save();
        res.status(201).json({ message: 'Hospital created successfully', hospital });
    } catch (error) {
        console.error('Error creating hospital:', error); // Log error for debugging
        res.status(400).json({ message: 'Error creating hospital', error: error.message });
    }
};

const deleteHospital = async (req, res) => {
    try {
        const { id } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid hospital ID format' });
        }

        const hospital = await Hospital.findByIdAndDelete(id);

        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }

        res.status(200).json({ message: 'Hospital deleted successfully' });
    } catch (error) {
        console.error('Error deleting hospital:', error); // Log error for debugging
        res.status(500).json({ message: 'Error deleting hospital', error: error.message });
    }
};

const editHospital = async (req, res) => {
    try {
        const { id, ...updateData } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid hospital ID format' });
        }

        if (!id || Object.keys(updateData).length === 0) {
            return res.status(400).json({ message: 'ID and at least one other specification are required' });
        }

        // Optional: Remove fields that should not be updated or validate the updateData structure
        const hospital = await Hospital.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });

        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }

        res.status(200).json({ message: 'Hospital updated successfully', hospital });
    } catch (error) {
        console.error('Error updating hospital:', error); // Log error for debugging
        res.status(500).json({ message: 'Error updating hospital', error: error.message });
    }
};

const getAllHospitals = async (req, res) => {
    try {
        const hospitals = await Hospital.find();
        res.status(200).json({ hospitals });
    } catch (error) {
        console.error('Error fetching hospitals:', error); // Log error for debugging
        res.status(500).json({ message: 'Error fetching hospitals', error: error.message });
    }
};

const getHospitalById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid hospital ID format' });
        }

        const hospital = await Hospital.findById(id);

        if (!hospital) {
            return res.status(404).json({ message: 'Hospital not found' });
        }

        res.status(200).json({ hospital });
    } catch (error) {
        console.error('Error fetching hospital:', error); // Log error for debugging
        res.status(500).json({ message: 'Error fetching hospital', error: error.message });
    }
};

module.exports = {
    createHospital,
    deleteHospital,
    editHospital,
    getAllHospitals,
    getHospitalById,
};
