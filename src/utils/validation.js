const Joi = require('joi');

module.exports = {
    validateSignup: (data) => {
        const schema = Joi.object({
            email: Joi.string().email().required().messages({
                'string.email': 'Invalid email format',
                'string.empty': 'Email is required',
            }),
            password: Joi.string().min(6).required().messages({
                'string.min': 'Password must be at least 6 characters',
                'string.empty': 'Password is required',
            }),
        });

        const { error } = schema.validate(data);
        if (error) {
            throw new Error(error.details[0].message);
        }
    },

    validateLogin: (data) => {
        const schema = Joi.object({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        });

        const { error } = schema.validate(data);
        if (error) {
            throw new Error(error.details[0].message);
        }
    },
};