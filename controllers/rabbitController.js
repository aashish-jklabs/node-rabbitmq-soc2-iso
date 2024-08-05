const { getRabbitChannel } = require('../utils/rabbitConnection');
const { decryptMessage } = require('../utils/encryption');

const handleMessage = async () => {
    const channel = await getRabbitChannel();
    const queue = 'rabbitmq-test';

    channel.consume(queue, (msg) => {
        if (msg !== null) {
            const decryptedMessage = decryptMessage(msg.content.toString());
            logger.info('Received message from RabbitMQ', { message: decryptedMessage });
            console.log('Received message: ', decryptedMessage);
            // TODO: need to handle message here
            channel.ack(msg);
        }
    })
}

module.exports = {
    handleMessage
}