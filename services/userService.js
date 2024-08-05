const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const { JWT_SECRET } = process.env;

const registerUser = async ({ username, password }) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    logger.info('User created', { username });
    return user;
}

const loginUser = async ({ username, password }) => {
    const user = await User.findOne({ username });
    if(!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error('Invalid username or password');
    }
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    logger.info('User authenticated', { username });
    return token;
}

module.exports = {
    registerUser,
    loginUser
}