const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');

// Fetch viewing history for a profile
router.get('/:profileId', historyController.getHistory);

module.exports = router;