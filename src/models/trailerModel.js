const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Trailer = sequelize.define('Trailer', {
    trailer_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    content_type: { type: DataTypes.ENUM('movie', 'series', 'season', 'episode'), allowNull: false },
    content_id: { type: DataTypes.INTEGER, allowNull: false },
    trailer_url: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: false, tableName: 'Trailers' });

module.exports = Trailer;