const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Series = require('./seriesModel');

const Season = sequelize.define('Season', {
    season_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    series_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Series,
            key: 'series_id',
        },
    },
    season_number: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.TEXT,
    },
    release_date: {
        type: DataTypes.DATEONLY,
    },
}, {
    timestamps: true,
    tableName: 'Seasons',
});

Series.hasMany(Season, { foreignKey: 'series_id', onDelete: 'CASCADE' });
Season.belongsTo(Series, { foreignKey: 'series_id', onDelete: 'CASCADE' });

module.exports = Season;