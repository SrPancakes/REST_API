const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

// Search for content
router.get('/', searchController.searchContent);

module.exports = router;