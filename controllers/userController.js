const { registerUser, loginUser } = require('../services/userService');

const register = async (req, res) => {
    try {
        const user = await registerUser(req.body);
        logger.info('User registered', { user });
        res.status(201).json(user);
    } catch (error) {
        logger.error('User registration failed', error);
        res.status(400).json({ error: error.message });
    }
}

const login = async (req, res) => {
    try {
        const token = await loginUser(req.body);
        logger.info('User logged in', { username: req.body.username });
        res.status(200).json({token});
    } catch (error) {
        logger.error('User login failed', error);
        res.status(401).json({ error: error.message });
    }
}

module.exports = {
    register,
    login
}