const express = require('express');
const statusRoutes = require('../../interfaces/routes/status.routes');
const requerimientoRoutes = require('../../interfaces/routes/requerimiento.routes');

function createApp() {
    const app = express();
    app.use(express.json());

    app.use('/api', statusRoutes);
    app.use('/api', requerimientoRoutes);

    return app;
}

module.exports = { createApp };
