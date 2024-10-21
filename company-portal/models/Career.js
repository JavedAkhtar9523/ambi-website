const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  jobOpeningID: { type: String, required: true },  
  dateOpened: { type: Date, required: true },       
  jobType: { type: String, 
    enum: ['Full-time', 'Part-time', 'Internship'], 
    required: true }, 
  industry: { type: String, required: true },      
  workExperience: { type: String, required: true },
  position: { type: String, required: true },       
  createdTime: { type: Date, required: true },     
  location: {
    city: { type: String, required: true },         
    state: { type: String, required: true },       
    country: { type: String, required: true },     
    zipCode: { type: String, required: true },      
  },
  requirements: { type: String },                                       
});

module.exports = mongoose.model('Career', careerSchema);
