const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
const jwtHelper = require('../utils/jwtHelper');
const validation = require('../utils/validation');
const constants = require('../utils/constants');

exports.signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ email, password: hashedPassword });
        const token = jwtHelper.generateToken({ userId: user.user_id, role: constants.ROLES.USER });

        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        next(error);
    }   
};

exports.login = async (req, res) => {
    try {
        validation.validateLogin(req.body);

        const { email, password } = req.body;

        console.log('Login request:', { email, password });

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const jwtSecret = process.env.JWT_SECRET;
        if (!jwtSecret) {
            return res.status(500).json({ message: 'Internal server error: Missing JWT_SECRET' });
        }

        const token = jwtHelper.generateToken({ userId: user.user_id, role: constants.ROLES.USER });
        res.json({ token });
    } catch (error) {
        next(error);
    }
};