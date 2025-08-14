const About = require('../models/About');

exports.getAbout = async (req, res) => {
  try {
    const about = await About.findOne().sort({ createdAt: -1 });
    res.json(about || {});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createAbout = async (req, res) => {
  try {
    const about = new About(req.body);
    const saved = await about.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
