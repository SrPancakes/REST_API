const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Fetch all profiles for a user
router.get('/:userId', profileController.getProfiles);

// Add a new profile
router.post('/:userId', profileController.createProfile);

// Update a profile
router.put('/:profileId', profileController.updateProfile);

// Delete a profile
router.delete('/:profileId', profileController.deleteProfile);

module.exports = router;