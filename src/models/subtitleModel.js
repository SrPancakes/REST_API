const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Subtitle = sequelize.define('Subtitle', {
    subtitle_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    content_type: { type: DataTypes.ENUM('movie', 'series', 'season', 'episode'), allowNull: false },
    content_id: { type: DataTypes.INTEGER, allowNull: false },
    language: { type: DataTypes.STRING, allowNull: false },
    subtitle_url: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: false, tableName: 'Subtitles' });

module.exports = Subtitle;