const ObtenerRequerimiento = require('../../application/useCases/ObtenerRequerimiento');
const SharePointRequerimientoRepository = require('../../infrastructure/database/SharePointRequerimientoRepository');

class RequerimientoController {
    static getRequerimiento(req, res) {
        const repository = new SharePointRequerimientoRepository();
        const casoUso = new ObtenerRequerimiento(repository);

        try {
            const data = casoUso.ejecutar('REQ-001');
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: "Error interno del servidor" });
        }
    }
}

module.exports = RequerimientoController;
