const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para entender JSON
app.use(express.json());

// ENDPOINT 1: El "Hola Mundo" (Healthcheck)
// Ruta: GET /api/status
app.get('/api/status', (req, res) => {
    res.json({
        mensaje: "¡Hola Mundo! El pipeline de Jenkins está funcionando a la perfeccion.",
        version: "1.2.0",
        estado: "Operativo",
        timestamp: new Date()
    });
});

// ENDPOINT 2: Simulando la base de datos (Data)

// Ruta: GET /api/requerimiento
app.get('/api/requerimiento', (req, res) => {
    res.json({
        id: "REQ-001",
        area: "Electricidad",
        contratista: "Diego Pérez",
        estado: "En Revisión",
        coordenadas: { lat: -36.8201, lng: -73.0444 }
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Backend de prueba corriendo en el puerto ${PORT}`);
});

