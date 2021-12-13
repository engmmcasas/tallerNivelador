# tallerNivelador

## Get & Post cowsay (no dockerizada)

Es una aplicacion que permite desplegar la libreria cowsay en un servidor donde puede recibir un texto y mostrarlo, o se puede pedir un texto por default siendo este "Intro master web development...!".

Para correrlo es necesario descargar el proyecto, ejecutar `npm install` (que descargara las librerias necesarias) y dentro de la carpeta "intro_cowsay" ejecutar node `basic_server_cowsay.js`.

Usando una aplicacion como postman, se pueden aplicar los metodos GET para traerse el texto default, asi como el metodo POST para enviar un texto y en consecuencian la aplicacion lo mostrara.


## Get & Post cowsay (Dockerizada)

Para hacer uso de la aplicacion en docker primero hay que crear la image docker, para esto es necesario tener docker instalado, descargar el respositorio, colocarse al nivel del archivo "Dockerfile" y ejecutar el siguiente comando `docker build -t taller-intro`, creando asi la imagen docker. 

Por ultimo, ejecutar `docker run -p 49160:8080 -d taller-intro`, que levantara la imagen y aplicacion, y su uso es igual a la seccion anterior.
