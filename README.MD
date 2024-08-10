## Para construir la imagen

docker build -t ticketprueba .

## Para desplegar la imagen con diferentes variables de entorno

docker run -d -p 3001:4000 --name ticketprueba -e NODE_ENV=uat ticketprueba


