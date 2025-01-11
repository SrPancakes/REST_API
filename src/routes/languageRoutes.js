const express = require('express');
const router = express.Router();
const languageController = require('../controllers/languageController');

// Fetch available languages for a piece of content
router.get('/:contentType/:contentId', languageController.getLanguages);

// Fetch available subtitles for a piece of content
router.get('/subtitles/:contentType/:contentId', languageController.getSubtitles);

module.exports = router;