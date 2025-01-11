const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Profile = require('./profileModel');

const Watchlist = sequelize.define('Watchlist', {
    watchlist_id: {
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
    added_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    timestamps: false,
    tableName: 'Watchlist',
});

Profile.hasMany(Watchlist, { foreignKey: 'profile_id', onDelete: 'CASCADE' });
Watchlist.belongsTo(Profile, { foreignKey: 'profile_id', onDelete: 'CASCADE' });

module.exports = Watchlist;