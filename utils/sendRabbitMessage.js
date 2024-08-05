const { getRabbitChannel } = require('./rabbitConnection');
const { encryptMessage } = require('./encryption');

const sendRabbitMessage = async (queue, message) => {
    const channel = await getRabbitChannel();
    await channel.assertQueue(queue, { durable: true });
    const encryptedMessage = encryptMessage(message);
    channel.sendToQueue(queue, Buffer.from(encryptedMessage));
    logger.info('Message sent to RabbitMQ', { queue, message });
};

module.exports = sendRabbitMessage;