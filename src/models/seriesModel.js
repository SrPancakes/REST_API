const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Series = sequelize.define('Series', {
    series_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    release_date: {
        type: DataTypes.DATEONLY,
    },
    genres: {
        type: DataTypes.JSON,
    },
    language: {
        type: DataTypes.STRING,
        defaultValue: 'English',
    },
    parental_rating: {
        type: DataTypes.STRING,
    },
    production_company: {
        type: DataTypes.STRING,
    },
    poster_url: {
        type: DataTypes.STRING,
    },
}, {
    timestamps: true,
    tableName: 'Series',
});

module.exports = Series;