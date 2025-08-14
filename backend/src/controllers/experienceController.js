const Experience = require('../models/Experience');

exports.getAllExperiences = async (req, res) => {
  try {
    const experiences = await Experience.find({});
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createExperience = async (req, res) => {
  try {
    const newExperience = new Experience(req.body);
    const saved = await newExperience.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
