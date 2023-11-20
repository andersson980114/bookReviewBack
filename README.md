<h1 align="center"> Book Review Back </h1> <br>

<p align="center">
  <a href="#"> 
    <img  src="https://github.com/andersson980114/bookReviewBack/assets/70853111/d7310afd-581a-491c-9942-8d14f1ac41ff" width="540">
  </a>
</p>
 

<p align="center">
  Contruido con Express.js
</p>
 
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Introduccion](#Introduccion)
- [Características](#Características)
- [Instalaciones](#Instalaciones)
- [Variables_de_Entorno](#Variables_de_Entorno)
- [Ejecución](#Ejecución) 
- [Prueba_Despliegue](#Prueba_Despliegue)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Introduccion

Este Rest Api fue creado para la prueba tecnica de ControlBox, dando solución desde la parte del back a un sistema de reseñas de libros. A continuación encontraremos una guia de instalación, ejecucion y prueba de la Rest Api desplegada.
 

## Características

Algunas de las Características de esta Rest Api son:

* Registro de Usuario.
* Login de usuario.
* JWT y RefreshToken.
* Crud para gestionar autores de libros.
* Crud para gestionar categorias de libros.
* Crud para gestionar los datos de los libros.
* Crud para gestionar las reseñas de los libors.

## Instalaciones

Para realizar las siguientes instalaciones es necesario tener ya instalado [Node.js](https://nodejs.org/es/download/).

Posteriormente se requiere clonar el repositorio

```bash
# Clone
$ git clone https://github.com/andersson980114/bookReviewBack.git
```

Una vez clonado es necesario ubicarnos desde la terminal en la carpeta raiz del proyecto y ejecutar la siguiente linea para instalar las dependencias.
```bash
# Dependencias
$ npm install
```

#Variables_de_Entorno
Una vez instaladas las dependencias debemos añadir las variables de entorno en un archivo .env.


```bash
# .env 
MONGODB_URI=
FRONT=
PORT=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_URL=
```

## Ejecución
Para la ejecución del aplicativo se debe ubicar en la raiz del proyecto desde la terminal, postariormente escribir la linea.
```bash
# npm 
$ npm start
```

Esto iniciará la ejecución y nos mostrará el puerto donde se ejecuta nuestra api.


## Prueba_Despliegue
Para desplegarlo usé [railway](https://railway.app/), que está enlazada con mis  repositorios de github, seleccioné el repositorio que queria subir, agregé las respectivas variables de entorno y lo desplegué.

=> documentacion de la api: https://bookreviewback-production.up.railway.app/api-docs/
  
