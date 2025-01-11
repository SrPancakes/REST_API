const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Season = require('./seasonModel');

const Episode = sequelize.define('Episode', {
    episode_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    season_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Season,
            key: 'season_id',
        },
    },
    episode_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
}, {
    timestamps: true,
    tableName: 'Episodes',
});

Season.hasMany(Episode, { foreignKey: 'season_id', onDelete: 'CASCADE' });
Episode.belongsTo(Season, { foreignKey: 'season_id', onDelete: 'CASCADE' });

module.exports = Episode;