const express = require('express');
const router = express.Router();
const FollowUp = require('../models/FollowUp');

// Get all follow-ups
router.get('/', async (req, res) => {
  try {
    const followUps = await FollowUp.find().populate('clientId');
    res.json(followUps);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create follow-up
router.post('/', async (req, res) => {
  const followUp = new FollowUp(req.body);
  try {
    const newFollowUp = await followUp.save();
    res.status(201).json(newFollowUp);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;