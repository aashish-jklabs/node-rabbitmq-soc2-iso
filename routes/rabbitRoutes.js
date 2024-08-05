const express = require('express');
const router = express.Router();
const sendRabbitMessage = require('../utils/sendRabbitMessage');
const rateLimiter = require('../middlewares/rateLimiter');

router.post('/send', rateLimiter, async(req, res) => {
    const { queue, message } = req.body;
    try {
        await sendRabbitMessage(queue, message);
        logger.info('Message sent to RabbitMQ', { queue, message });
        res.status(200).json({ message: 'Message sent' });
    } catch (error) {
        logger.error('Failed to send message to RabbitMQ', error);
        res.status(500).json({ message: 'Failed to send message', error });
    }
})

module.exports = router;