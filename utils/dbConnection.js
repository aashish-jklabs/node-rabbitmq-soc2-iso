const mongoose = require('mongoose');
const { mongoUri } = require('../config/config');

const connectToDatabase = async () => {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Connected to MongoDB');
    console.log('Connected to MongoDB');
  } catch (error) {
    logger.error('Failed to connect to MongoDB', error);
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectToDatabase;
