const AuditLog = require('../models/auditLogModel');

exports.getAuditLogs = async (req, res) => {
    try {
        const logs = await AuditLog.findAll();
        res.json(logs);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching audit logs', error });
    }
};