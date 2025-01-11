const express = require('express');
const router = express.Router();
const playbackController = require('../controllers/playbackController');

// Fetch playback progress for a profile
router.get('/:profileId', playbackController.getProgress);

// Update playback progress
router.post('/:profileId', playbackController.updateProgress);

module.exports = router;