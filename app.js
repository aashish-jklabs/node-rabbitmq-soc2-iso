const express = require('express');
require('dotenv').config();
const rateLimiter = require('./middlewares/rateLimiter');
const userRoutes = require('./routes/userRoutes');
const rabbitRoutes = require('./routes/rabbitRoutes');
const { handleMessage } = require('./controllers/rabbitController')

const app = express();

app.use(express.json());
app.use(rateLimiter);

app.use('/api/users', userRoutes);
app.use('/api/messages', rabbitRoutes);

connectToDatabase();
handleMessage();

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).send('Something broke!');
});
  

module.exports = app;
