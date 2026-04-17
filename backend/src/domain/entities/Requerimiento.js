class Requerimiento {
    constructor({ id, area, contratista, estado, coordenadas }) {
        this.id = id;
        this.area = area;
        this.contratista = contratista;
        this.estado = estado;
        this.coordenadas = coordenadas;
    }
}

module.exports = Requerimiento;
