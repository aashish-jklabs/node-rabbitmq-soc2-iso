const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/userController');
const rateLimiter = require('../middlewares/rateLimiter');

router.post('/register', rateLimiter, register);
router.post('/login', rateLimiter, login);

module.exports = router;