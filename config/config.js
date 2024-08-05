module.exports = {
    port: process.env.PORT || 3000,
    jwtSecret: process.env.JWT_SECRET,
    rabbitmqUrl: process.env.RABBITMQ_URL,
    mongoUri: process.env.MONGO_URI,
}