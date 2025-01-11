const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Profile = require('./profileModel');

const History = sequelize.define('History', {
    history_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    profile_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: Profile, key: 'profile_id' } },
    content_type: { type: DataTypes.ENUM('movie', 'series', 'season', 'episode'), allowNull: false },
    content_id: { type: DataTypes.INTEGER, allowNull: false },
    watched_at: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    watch_duration: { type: DataTypes.INTEGER }, // In seconds
}, { timestamps: false, tableName: 'History' });

Profile.hasMany(History, { foreignKey: 'profile_id', onDelete: 'CASCADE' });
History.belongsTo(Profile, { foreignKey: 'profile_id', onDelete: 'CASCADE' });

module.exports = History;