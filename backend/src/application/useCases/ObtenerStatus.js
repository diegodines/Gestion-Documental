class ObtenerStatus {
    ejecutar() {
        return {
            mensaje: "¡Hola Mundo! El pipeline de Jenkins está funcionando perfecto.",
            version: "1.2.0",
            estado: "Operativo",
            timestamp: new Date()
        };
    }
}

module.exports = ObtenerStatus;
