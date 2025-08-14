const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  aboutMe: { type: String, required: true },
  family: { type: String, required: true },
  gamingAirsoft: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('About', aboutSchema);