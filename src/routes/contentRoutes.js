const express = require('express');
const router = express.Router();
const contentController = require('../controllers/contentController');

// Fetch all movies
router.get('/movies', contentController.getMovies);

// Fetch all series
router.get('/series', contentController.getSeries);

// Fetch a specific movie
router.get('/movies/:movieId', contentController.getMovieById);

// Fetch series details (including seasons and episodes)
router.get('/series/:seriesId', contentController.getSeriesById);

module.exports = router;
