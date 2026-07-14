const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: String,
  developer: String,
  type: {
    type: String,
    enum: ['Apartment', 'Villa', 'Land', 'Commercial'],
  },
  unitCount: Number,
  priceRange: {
    min: Number,
    max: Number,
  },
  description: String,
  images: [String],
  amenities: [String],
  status: {
    type: String,
    enum: ['Planning', 'Under Construction', 'Ready', 'Sold Out'],
    default: 'Planning',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Project', projectSchema);