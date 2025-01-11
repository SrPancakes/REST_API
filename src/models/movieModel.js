const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Movie = sequelize.define('Movie', {
    movie_id: {
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
    duration_minutes: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
    tableName: 'Movies',
});

module.exports = Movie;