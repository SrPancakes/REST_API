const jwt = require('jsonwebtoken');
const constants = require('./constants');

module.exports = {
    // Generate a JWT token
    generateToken: (payload) => {
        try {
            return jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: constants.JWT_EXPIRES_IN,
            });
        } catch (error) {
            throw new Error('Failed to generate token');
        }
    },

    // Verify a JWT token
    verifyToken: (token) => {
        try {
            return jwt.verify(token, process.env.JWT_SECRET);
        } catch (error) {
            throw new Error('Invalid token');
        }
    },
};