# Usamos una versión ligera de Node.js
FROM node:18-alpine

# Creamos la carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias y las instalamos
COPY package*.json ./
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto interno (el mismo que pusimos en index.js)
EXPOSE 3000

# Comando para encender el servidor
CMD ["node", "index.js"]