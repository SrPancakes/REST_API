const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModel');

const AuditLog = sequelize.define('AuditLog', {
    log_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: User, key: 'user_id' } },
    action: { type: DataTypes.STRING, allowNull: false },
    details: { type: DataTypes.JSON },
    timestamp: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { timestamps: false, tableName: 'AuditLogs' });

User.hasMany(AuditLog, { foreignKey: 'user_id', onDelete: 'CASCADE' });
AuditLog.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

module.exports = AuditLog;
