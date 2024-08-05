const amqp = require('amqplib');
const { RABBITMQ_URL } = process.env;

let channel;

const getRabbitChannel = async () => {
    if(!channel) {
        const connection = await amqp.connect(RABBITMQ_URL);
        channel = await connection.createChannel();
        logger.info('RabbitMQ channel created');
    }
    return channel;
};

module.exports = {
    getRabbitChannel
}