const express = require('express');
const router = express.Router();
const auditController = require('../controllers/auditController');

// Fetch all audit logs
router.get('/', auditController.getAuditLogs);

module.exports = router;