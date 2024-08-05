const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: 'Too many requests from this IP, please try again after 15 minutes',
    handler: (req, res) => {
        logger.warn(`Too many requests from IP: ${req.ip}`);
        res.status(429).json({ message: 'Too many requests, please try again later.' });
    }
});

module.exports = apiLimiter;