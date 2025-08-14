const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  role: { type: String, required: true },         
  company: { type: String, required: true },      
  startDate: { type: String, required: true },    
  endDate: { type: String },                       
  description: { type: String, required: true },   
  techStack: [{ type: String }],
  imageUrl: { type: String }
});

module.exports = mongoose.model('Experience', experienceSchema);
