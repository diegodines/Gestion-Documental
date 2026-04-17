const express = require('express');
const router = express.Router();
const StatusController = require('../controllers/StatusController');

router.get('/status', StatusController.getStatus);

module.exports = router;
