const express = require('express');
const router = express.Router();
const watchlistController = require('../controllers/watchlistController');

// Fetch watchlist for a profile
router.get('/:profileId', watchlistController.getWatchlist);

// Add to watchlist
router.post('/:profileId', watchlistController.addToWatchlist);

// Remove from watchlist
router.delete('/:profileId/:contentId', watchlistController.removeFromWatchlist);

module.exports = router;