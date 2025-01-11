const app = require('./app');
const sequelize = require('./config/db');
const config = require('./config/appConfig');

// Test database connection and start the server
(async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected successfully!');

        app.listen(config.server.port, () => {
            console.log(`Server is running on ${config.api.baseUrl}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1); // Exit process if database connection fails
    }
})();