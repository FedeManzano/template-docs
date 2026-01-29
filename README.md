<p align="center">
    <img src="./docs/images/logo.png" width="250px" height="250px">
</p>

<h1 align="center">:sparkles: Bodystyle Template</h1>

<p align="center">
  <a href="https://mega.nz/file/8cFFjSYZ#y82eMpvPRGRoQZUA8Lktuj3oHmFVMonJAE8hgFHj1MA"><img src="https://img.shields.io/badge/MEGA-Download-green" alt="MEGA Download"></a>
  <a href="https://mega.nz/file/dFMVnaSD#Bl1jtd8F_wN4Egd-_ijJdodQPOkI0owOw8N3kT7sgCo"><img src="https://img.shields.io/badge/Template-v1.0.0-blue" alt="Docs Download"></a>
</p>

---

<p align="center">
    <strong>Template reutilizable utilizados en la documentación de Bodystyle</strong><br><br>
    <i>Template con las funcionabilidades suficientes para documentar cualquier cosa que desees</i>
</p>

---

## Ejemplo 

Desde el enlace hay un ejemplo del template funcionando.

<a align="center" href="https://bodystyle.webcindario.com">Bodystyle Docs</a>

> Desde el enlace de arriba podemos ver un ejemplo del template funcionando como documentación de [Bodystyle](https://github.com/FedeManzano/bodystyle).

---

## :dart: Acerca de 

Se trata de un sitio web reutilizable para aplicarlo en diversos proyectos en los cuales se necesite documentar lo que sea, brindando el formato y los elementos para esta tarea.

## :building_construction: Dependencias

Para poder editar y utilizar la lógica del template se utilizan una serie de dependencias que permitirán procesar y 
transpilar el código de JavaScript.

### Dependencias  Desarrollo
| Nombre | Descripción | Sitio Oficial |
| ------                     | ----------- | ------------- |
| :white_check_mark: Webpack | Permite modularizar el código de JS y reenzamblarlo en un sólo archivo ```.bundle.js``` | [webpack 5.104.1](https://webpack.js.org/) |
| :white_check_mark: Babel | Permite transpilar el código ES6 a ES5. | [Babel 5.8.38](https://babeljs.io/) |


### Dependencias 

| Nombre | Descripción | Sitio Oficial |
|--------|-------------|---------------|
:white_check_mark: Bodystyle | Framework para el diseño y desarrollo de la interfaz de usuario en sitios y aplicaciones web. | [Bodystyle 6.5.0](https://bodystyle.webcindario.com) |

### Package.json

El paso siguiente es describir como viene configurado el archivo 
```package.json``` para poder ajustarlo a las necesidades del desarrollador.

```js
{
  // Nombre del proyecto
  // Lo deciden ustedes
  "name": "template_docs",

  // Versión en este caso 1.0.0
  "version": "1.0.0",

  // Alguna descripción acorde al proyecto en curso
  "description": "Template para docuementar, tema claro y oscuro",
  "keywords": [
    "Documentacion",
    "Template",
    "Dark Mode",
    "Light Mode",
    "bodyui"
  ],
  // Licencia a elección en este caso MIT
  "license": "MIT",

  // Autor equipo de desarrollo
  "author": "Federico Manzano",

  // Archivo raíz de los módulos JS
  "main": "app.js",

  // Permite ejecurar webpack y generar el archivo 
  // transpilado del proyecto en desarrollo
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "webpack"
  },
  "devDependencies": {
    "@babel/core": "^7.28.5",
    "@babel/preset-env": "^7.28.5",
    "babel": "^5.8.38",
    "babel-loader": "^10.0.0",
    "webpack": "^5.104.1",
    "webpack-cli": "^6.0.1"
  },
  "dependencies": {
    "bodyui2": "^6.5.4"
  }
}
```

## 🚀 Inicializar Proyecto

Es necesario inicializar el proyecto utilizando [NodeJS](https://nodejs.org/en) y [npm](https://www.npmjs.com/) para poder instalar todas las dependencias antes mencionadas.

```shell
npm init # para inicializar el proyecto

## Luego instalar las dependencias
npm install --save-dev webpack
npm install --save-dev webpack-cli
npm install --save-dev babel
npm install --save-dev babel-loader
npm install --save-dev @babel/core
npm install --save-dev @babel/preset-env
```
Una vez instaladas las dependencias podemos ejecutar el coomando que permitirá generar el archivo ```docs-body.js``` en el directorio ```/dist/js```, luego reemplazamos este archivo en ```/pages/js/docs-body.js```.

```shell
## Luego de este comendo es necesario reemplazar 
## el archivo /dist/js/docs-body.js en /docs/js/docs-body.js
npm run build # se genera el archivo transpilado.
```

## 🎨 Sass

Todos los archivos de estilos son procesados a través de 
[sass](https://sass-lang.com/) necesario si queremos realizar modificaciones en los estilos predefinos. Es importante aclarar que en el directorio /docs/css están incluídos los archivos css.

### Instalación

Para instalar sass lo podemos hacer de forma global y utilizarlo en todos los proyectos que se necesiten.

```shell
# A través de NPM podemos instalar el procesador.
npm install -g sass
```
