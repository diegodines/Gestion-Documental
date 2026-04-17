const RequerimientoRepository = require('../../domain/repositories/RequerimientoRepository');
const Requerimiento = require('../../domain/entities/Requerimiento');

class SharePointRequerimientoRepository extends RequerimientoRepository {
    obtenerPorId(id) {
        // Simulación de la respuesta asíncrona de SP/Graph API
        return new Requerimiento({
            id: id || "REQ-001",
            area: "Electricidad",
            contratista: "Benjamín Jiménez",
            estado: "En Revisión",
            coordenadas: { lat: -36.8201, lng: -73.0444 }
        });
    }
}

module.exports = SharePointRequerimientoRepository;
