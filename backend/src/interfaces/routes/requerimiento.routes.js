const express = require('express');
const router = express.Router();
const RequerimientoController = require('../controllers/RequerimientoController');

router.get('/requerimiento', RequerimientoController.getRequerimiento);

module.exports = router;
