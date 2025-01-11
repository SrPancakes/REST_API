const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Profile = require('./profileModel');

const PlaybackProgress = sequelize.define('PlaybackProgress', {
    progress_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Profile,
            key: 'profile_id',
        },
    },
    content_type: {
        type: DataTypes.ENUM('movie', 'series', 'season', 'episode'),
        allowNull: false,
    },
    content_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    progress_time: {
        type: DataTypes.INTEGER, // Time in seconds
        allowNull: false,
    },
    last_accessed: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
    tableName: 'PlaybackProgress',
});

Profile.hasMany(PlaybackProgress, { foreignKey: 'profile_id', onDelete: 'CASCADE' });
PlaybackProgress.belongsTo(Profile, { foreignKey: 'profile_id', onDelete: 'CASCADE' });

module.exports = PlaybackProgress;