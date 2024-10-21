const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  department: { type: String, required: true }, 
  bio: { type: String, required: true }, 
  contactInfo: {
    phone: { type: String },
    email: { type: String },
  },
  image: { type: String },
  dateJoined: { type: Date, default: Date.now }, 
},{ timestamps: true });

module.exports = mongoose.model('TeamMember', teamMemberSchema);
