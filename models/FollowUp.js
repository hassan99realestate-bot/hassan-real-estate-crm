const mongoose = require('mongoose');

const followUpSchema = new mongoose.Schema({
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ['Call', 'WhatsApp', 'Email', 'Meeting', 'Other'],
    default: 'Call',
  },
  notes: String,
  outcome: {
    type: String,
    enum: ['Interested', 'Not Interested', 'Pending', 'Scheduled Meeting'],
  },
  nextFollowUp: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('FollowUp', followUpSchema);