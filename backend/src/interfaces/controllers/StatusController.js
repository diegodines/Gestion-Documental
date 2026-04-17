const ObtenerStatus = require('../../application/useCases/ObtenerStatus');

class StatusController {
    static getStatus(req, res) {
        const casoUso = new ObtenerStatus();
        const resultado = casoUso.ejecutar();
        res.json(resultado);
    }
}

module.exports = StatusController;
