const { Sequelize } = require('sequelize');
const config = require('./appConfig');

// Load environment variables
const sequelize = new Sequelize(
    config.database.name,
    config.database.username,
    config.database.password,
    {
        host: config.database.host,
        dialect: 'mysql',
        port: config.database.port,
        logging: false
    }
);

module.exports = sequelize;