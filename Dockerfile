# 1. Definimos la imagen base (el sistema operativo miniatura)
FROM node:20-alpine

# 2. Creamos una carpeta dentro del contenedor para nuestro código
WORKDIR /app

# 3. Copiamos nuestro archivo index.js de GitHub al contenedor
COPY index.js .

# 4. El comando que se ejecutará cuando el contenedor se inicie
CMD ["node", "index.js"]
