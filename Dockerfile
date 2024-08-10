# Usar una imagen base oficial de Node.js
FROM node:20

# Instalar nodemon globalmente
RUN npm install -g nodemon

# Establecer el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Especificar la variable de entorno (puedes agregar tantas como necesites)
ENV NODE_ENV=production

# Exponer el puerto en el que tu aplicación correrá
EXPOSE 4000

# Comando para correr la aplicación
CMD ["nodemon", "src/index.js"]

