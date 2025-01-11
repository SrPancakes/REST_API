const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const SearchIndex = sequelize.define('SearchIndex', {
    search_id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    content_type: { type: DataTypes.ENUM('movie', 'series', 'season', 'episode'), allowNull: false },
    content_id: { type: DataTypes.INTEGER, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    genres: { type: DataTypes.JSON },
    release_date: { type: DataTypes.DATEONLY },
    keywords: { type: DataTypes.TEXT }, // Precomputed search terms
}, { timestamps: false, tableName: 'SearchIndex' });

module.exports = SearchIndex;