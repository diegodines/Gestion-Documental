class ObtenerRequerimiento {
    constructor(requerimientoRepository) {
        this.requerimientoRepository = requerimientoRepository;
    }

    ejecutar(id) {
        return this.requerimientoRepository.obtenerPorId(id);
    }
}

module.exports = ObtenerRequerimiento;
