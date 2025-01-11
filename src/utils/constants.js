module.exports = {
    // User roles
    ROLES: {
        ADMIN: 'admin',
        USER: 'user',
    },

    // Error messages
    ERRORS: {
        UNAUTHORIZED: 'Unauthorized: Token missing',
        FORBIDDEN: 'Forbidden: Invalid token',
        VALIDATION_ERROR: 'Validation error',
    },

    // Miscellaneous
    JWT_EXPIRES_IN: '1h',
};