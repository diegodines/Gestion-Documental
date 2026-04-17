const { createApp } = require('./src/infrastructure/webserver/app');
const env = require('./src/infrastructure/config/env');

const app = createApp();

app.listen(env.PORT, '0.0.0.0', () => {
    console.log(`Backend de prueba corriendo en el puerto ${env.PORT}`);
});
