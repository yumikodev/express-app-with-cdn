# Express app with cdn

Este proyecto consiste en subir contenido multimedia desde un servidor de Node.js a otro servidor de Node.js con peticiones **POST** a travéz de la web usando **Fetch API**.

**Nota:** Este es un ejemplo simple de como subir archivos multimedia a otro servidor de Node.js, sin base de datos ni nada complejo.

Se divide en dos servidores:

- `express-server`: este sera el servidor donde se subira el contenido multimedia.
- `cdn-server`: este sera el servidor donde se almacenara el contenido multimedia subido.

## Tecnologías:

Se usaron las siguientes tecnologías en este proyecto:

- `Node.js`: Para crear el **Back-end** de los servidores.
- `JavaScript`: Para el manejo del **DOM** y usar la **Fetch API** en el **Front-end**.
- `TypeScript`: El lenguaje que se uso en el **Back-end** de los servidores.
- `Express`: Un framework de Node.js para crear los servidores web.
- `Multer`: Un NPM para subir archivos al servidor.

## Instalación & uso:

Los servidores estan hechos con **TypeScript**, por lo que hay que compilar el código a **JavaScript**.

**Nota:** los servidores inicia en los siguientes puertos:

- `express-server`: puerto **3000**
- `cdn-server`: puerto **4000**

Primero tienes que clonar este repositorio:

```ssh-session
git clone https://github.com/Yumiko0828/express-app-with-cdn.git
```

Luego tienes que abrir una **terminal** dentro de las carpetas `express-server` y `cdn-server` y seguir las siguientes indicaciones:

- `npm install`: para instalar las dependencias y dependencias de desarrollo.
- `npm run build`: para compilar el código de TypeScript a JavaScript.
- `npm start`: para iniciar el servidor en modo de producción.
- `npm run dev`: para iniciar el servidor en modo de desarrollo.

## Licencia:

[Copyright (c) 2022 Yasu Yumiko - MIT License](https://github.com/Yumiko0828/express-app-with-cdn/blob/main/LICENSE)
