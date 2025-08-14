const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');
const throttle = require('../middleware/throttle');

router.post('/', throttle, chatController.chat);

module.exports = router;
