const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  clientId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  phone: String,
  whatsapp: String,
  email: String,
  clientType: {
    type: String,
    enum: ['Ready Buyer', 'Off-Plan Buyer', 'Owner', 'Investor'],
    default: 'Ready Buyer',
  },
  interestedProject: String,
  budget: Number,
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Qualified', 'Negotiating', 'Closed', 'Lost'],
    default: 'New',
  },
  lastContact: Date,
  nextFollowUp: Date,
  isVIP: {
    type: Boolean,
    default: false,
  },
  agent: String,
  notes: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Client', clientSchema);