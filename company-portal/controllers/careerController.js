const Career = require('../models/Career');

// Create a new job posting
exports.createCareer = async (req, res) => {
  try {
    const newCareer = new Career(req.body);
    const savedCareer = await newCareer.save();
    res.status(201).json(savedCareer);
  } catch (err) {
    res.status(500).json({ message: 'Error creating job posting', error: err.message });
  }
};

// Get all job postings
exports.getAllCareers = async (req, res) => {
  try {
    const careers = await Career.find();
    res.status(200).json(careers);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching job postings', error: err.message });
  }
};

// Get a single job posting by ID
exports.getCareerById = async (req, res) => {
  try {
    const career = await Career.findById(req.params.id);
    if (!career) {
      return res.status(404).json({ message: 'Job posting not found' });
    }
    res.status(200).json(career);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching job posting', error: err.message });
  }
};

// Update a job posting
exports.updateCareer = async (req, res) => {
  try {
    const updatedCareer = await Career.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!updatedCareer) {
      return res.status(404).json({ message: 'Job posting not found' });
    }
    res.status(200).json(updatedCareer);
  } catch (err) {
    res.status(500).json({ message: 'Error updating job posting', error: err.message });
  }
};

// Delete a job posting
exports.deleteCareer = async (req, res) => {
  try {
    const deletedCareer = await Career.findByIdAndDelete(req.params.id);
    if (!deletedCareer) {
      return res.status(404).json({ message: 'Job posting not found' });
    }
    res.status(200).json({ message: 'Job posting deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting job posting', error: err.message });
  }
};
