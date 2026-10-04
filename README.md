<p align="center">
    <img src="./docs/images/logo.png" width="250px" height="250px">
</p>

<h1 align="center">:sparkles: Bodystyle Template</h1>

<p align="center">
  <a href="https://mega.nz/file/8cFFjSYZ#y82eMpvPRGRoQZUA8Lktuj3oHmFVMonJAE8hgFHj1MA"><img src="https://img.shields.io/badge/MEGA-Download-green" alt="MEGA Download"></a>
  <a href="https://mega.nz/file/dFMVnaSD#Bl1jtd8F_wN4Egd-_ijJdodQPOkI0owOw8N3kT7sgCo"><img src="https://img.shields.io/badge/Template-v1.0.0-blue" alt="Docs Download"></a>
  <a href="https://fedemanzano.github.io/docs-bodystyle/"><img src="https://img.shields.io/badge/Ejemplo-bodystyle-red" alt="Online Docs"></a>
</p>

---

<p align="center">
    <strong>Template reutilizable utilizados en la documentación de Bodystyle</strong><br><br>
    <i>Template con las funcionabilidades suficientes para documentar cualquier cosa que desees</i>
</p>

---

## Ejemplo 

Desde el enlace hay un ejemplo del template funcionando.

<a align="center" href="https://fedemanzano.github.io/docs-bodystyle/">Bodystyle Docs</a>

> Desde el enlace de arriba podemos ver un ejemplo del template funcionando como documentación de [Bodystyle](https://github.com/FedeManzano/bodystyle).

---
## Descarga

Para disponer de este template podemos clonar este repositorio, y luego como veremos a continuación 
instalar las dependencias necesarias para procesar y transpilar el código.

```shell
# descarga el repositorio completo con todas las 
# funcionalidades
git clone https://github.com/template-docs 
```

## :dart: Acerca de 

Se trata de un sitio web reutilizable para aplicarlo en diversos proyectos en los cuales se necesite documentar lo que sea, brindando el formato y los elementos para esta tarea.

## ⭐ Características Principales

- :moon: **Tema claro y oscuro** - Cambia entre temas con preferencia guardada en localStorage
- :mag: **Sistema de búsqueda** - Búsqueda inteligente en la documentación
- :iphone: **Diseño responsive** - Totalmente adaptable a cualquier dispositivo (desktop, tablet, móvil)
- :art: **Framework Bodystyle** - Utiliza componentes modernos y accesibles de Bodystyle
- :clipboard: **Múltiples lenguajes de código** - Soporta resaltado de sintaxis para HTML, CSS, JavaScript, SQL, Java
- :clipboard_with_checkbox: **Menú lateral dinámico** - Navegación intuitiva con submenús desplegables
- :a: **Accesibilidad** - Etiquetas ARIA y estructura semántica HTML5
- :zap: **Modularizado** - Código JS modularizado y transpilado con Webpack y Babel
- :memo: **Plantilla editable** - Plantilla HTML lista para personalizar y reutilizar

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

### Ejecución 

Para procesar los archivos sass necesitamos utilizar el comando ```sass```.

```shell
# Genera el archivo minificado de Bodystyle 
sass -s compressed sass/bodystyle.scss docs/css/bodystyle.min.css

# Genera el archivo minificado de Docs 
# Estos son los archivos con los estilos de estilos propios de la documentación
sass -s compressed sass/docs.scss docs/css/docs.css
```

## 🖼️ Plantilla

Dentro del directorio docs del template hay un directorio plantilla que contiene una plantilla editable 
para crear las páginas y aprovechar este recurso.

```html
<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <meta name="description" content="Comienzo de la documentación de bodystyle.">
     <link rel="canonical" href="https://bodystyle.webcindario.com/paginas/get_started.html">

    <link rel="icon" href="../favicon.ico" type="image/x-icon">


    <link rel="stylesheet" href="../css/bodystyle.min.css">
    <link rel="stylesheet" href="../css/docs.css">
    <link rel="stylesheet"
        href="https://rawcdn.githack.com/FedeManzano/bodystyle-icons/refs/heads/master/iconos/bs-iconos.min.css">
    <link rel="stylesheet"
        href="../css/show-dark.min.css">
    <title>Bodystyle</title>
</head>

<body>

    <section class="theme-light mb-3">
        <!--Busqueda-->
        <div id="lista-busqueda" class="search-list"></div>
        <!--Barra de navegación -->
        <nav id="nav" class="bs-nav bs-nav-fixed"></nav>

        <div id="sidebar" class="bs-sidebar-drop-light "></div>

        <section id="main">
             <div id="componente_busqueda" class="input-g mb-2 ancho-50 ancho-m-60 ancho-s-80 ancho-xs-100" role="search">
                <div class="grupo">
                    <span id="span_buscador" class="span-grupo c-white" aria-hidden="true">🔎</span>
                    <input 
                        aria-label="Buscar en la documentación" 
                        aria-describedby="search-hint"
                        aria-controls="search-results"
                        class="fd-gris-n c-white" 
                        type="search" 
                        name="" 
                        id="buscador" 
                        placeholder="Buscar en la documentación...">
                </div>
            </div>
            <h1 id="1" class="scroll-item">Documentación</h1>
            <p class="fz-20 fz-m-19 fz-s-18 fz-xs-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis sit aliquam aspernatur quas?
                Voluptas aspernatur excepturi quas, delectus fugiat ut, minus, sapiente atque voluptatum magnam illo
                explicabo ab illum ea.</p>

            <div id="info_general"></div>


            <article class="article">
                <h2 id="2" class="scroll-item">Introducción</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet odio pariatur soluta animi quae
                    neque, aspernatur molestiae sunt, ex odit iusto dignissimos et aperiam tenetur. Culpa modi
                    recusandae
                    dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus delectus doloribus
                    vitae explicabo fugit vel reprehenderit! Iure quaerat dolorem architecto? Ipsa adipisci quod aliquam
                    nisi, animi optio voluptates laboriosam vitae.
                </p>
                <div class="table-responsive">
                    <table class="selector">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Telefono</th>
                                <th>Direccion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan</td>
                                <td>Pérez</td>
                                <td>juan.perez@email.com</td>
                                <td>+54 11 4567-8901</td>
                                <td>Av. Corrientes 1234</td>
                            </tr>
                            <tr>
                                <td>María</td>
                                <td>González</td>
                                <td>maria.gonzalez@email.com</td>
                                <td>+54 11 5678-9012</td>
                                <td>Calle Florida 567</td>
                            </tr>
                            <tr>
                                <td>Carlos</td>
                                <td>Rodríguez</td>
                                <td>carlos.rodriguez@email.com</td>
                                <td>+54 351 234-5678</td>
                                <td>San Martín 890</td>
                            </tr>
                            <tr>
                                <td>Ana</td>
                                <td>Martínez</td>
                                <td>ana.martinez@email.com</td>
                                <td>+54 261 345-6789</td>
                                <td>Las Heras 456</td>
                            </tr>
                            <tr>
                                <td>Luis</td>
                                <td>Fernández</td>
                                <td>luis.fernandez@email.com</td>
                                <td>+54 381 456-7890</td>
                                <td>Av. Alem 789</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


            </article>


            <article class="article">
                <h2 id="3" class="scroll-item">Sección 3</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet odio pariatur soluta animi quae
                    neque, aspernatur molestiae sunt, ex odit iusto dignissimos et aperiam tenetur. Culpa modi
                    recusandae
                    dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus delectus doloribus
                    vitae explicabo fugit vel reprehenderit! Iure quaerat dolorem architecto? Ipsa adipisci quod aliquam
                    nisi, animi optio voluptates laboriosam vitae.
                </p>

                <div class="alert">
                    <h4 class="c-blue-s"><i class="bs-info c-blue-s">&nbsp;</i>Información</h4>
                    <p>
                        Esto es una alerta informativa, utilizando las fuentes de Bodystyle.
                    </p>
                </div>

                <div class="alert mt-3" >
                    <h4 class="c-yellow"><i class="bs-warning c-yellow">&nbsp;</i>Advertencia</h4>
                    <p>
                        Esto es una alerta de advertencia, utilizando las fuentes de Bodystyle.
                    </p>
                </div>

                <div class="alert mt-3" >
                    <h4 class="c-red"><i class="bs-cancel c-red">&nbsp;</i>Peligro</h4>
                    <p>
                        Esto es una alerta de advertencia, utilizando las fuentes de Bodystyle.
                    </p>
                </div>

            </article>

            <article class="article">
                <h2 id="4" class="scroll-item">Sección 4</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eveniet odio pariatur soluta animi quae
                    neque, aspernatur molestiae sunt, ex odit iusto dignissimos et aperiam tenetur. Culpa modi
                    recusandae
                    dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus delectus doloribus
                    vitae explicabo fugit vel reprehenderit! Iure quaerat dolorem architecto? Ipsa adipisci quod aliquam
                    nisi, animi optio voluptates laboriosam vitae.
                </p>

<div class="codigo">
    <label for="cod-html" 
    class="label">
        SQL
        <i class="bs-copy c-bodyui fz-20 btn-copy"></i>
    </label>
<pre class="cod-sql pt-1">
    -- Esto es código SQL 
    SELECT nombre, apellido, email
    FROM usuarios
    WHERE activo = 1;
</pre>
</div>

<div class="codigo">
    <label for="cod-html" 
    class="label">
        JS
        <i class="bs-copy c-bodyui fz-20 btn-copy"></i>
    </label>
<pre class="cod-js pt-1">
    // Esto es código JavaScript
    function saludar(nombre) {
        console.log("Hola, " + nombre + "!");
    }
    
    saludar("Mundo");
</pre>
</div>

<div class="codigo">
    <label for="cod-html" 
    class="label">
        HTML
        <i class="bs-copy c-bodyui fz-20 btn-copy"></i>
    </label>
<pre class="cod-html pt-1">
    <!-- Esto es código HTML -->
    <div>
       <h1>Hola Mundo</h1>
       <p>Este es un ejemplo de código HTML.</p>
    </div>
</pre>
</div>

<div class="codigo">
    <label for="cod-html" 
    class="label">
        JAVA
        <i class="bs-copy c-bodyui fz-20 btn-copy"></i>
    </label>
<pre class="cod-java pt-1">
    public static void main(String[] args) {
        // Esto es código Java
        System.out.println("Hola, Mundo!");
    }
</pre>
</div>

<div class="codigo">
    <label for="cod-html" 
    class="label">
        CSS
        <i class="bs-copy c-bodyui fz-20 btn-copy"></i>
    </label>
<pre class="cod-css pt-1">
    /* Esto es código CSS */
    body {
        font-family: Arial, sans-serif;
        background-color: #f0f0f0;
    }
</pre>
</div>
            </article>

            <article class="article">
                <h3 id="autor" class="scroll-item">Autor</h3>
                <div id="autor_content"></div>
            </article>

        </section>
    </section>



    <div class="lista-scroll ocultar-desde-medianos">
        <ul>
            <li><a href="#1">Opción 1</a></li>
            <li><a href="#2">Opción 2</a></li>
            <li><a href="#3">Opción 3</a></li>
            <li><a href="#autor">🧑‍🏫 Autor</a></li>
        </ul>
    </div>

    
    <script src="../js/docs-body.js"></script>
    <script>
        // Inicializar el Sidebar
        BS.SidebarDropInit({ idNav: "#nav", idSidebar: "#sidebar", submenu: "#l1" });
        BS.CommentInit()
        BS.ToolTipsInit()
        BS.BotonInicioInit()
        BS.CodigoHtmlInit()
        BS.CodigoSqlInit()
        BS.CodigoJsInit()
        BS.CodigoJavaInit()
        BS.CodigoCssInit()
        BS.PersonalizadoInit({ori: "disparador"})
        document.querySelectorAll("#l1 ul li a")[1].classList.add("c-red");

    </script>
</body>

</html>
```

> A partir de esta plantilla se aprovecharán todos los elementos dispuestos por el template.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usar, copiar, modificar y distribuir este código libremente, siempre que incluyas el aviso de copyright y licencia.

## 👨‍💻 Autor

**Federico Manzano** - Desarrollador web

- GitHub: [FedeManzano](https://github.com/FedeManzano)
- Proyecto Base: [Bodystyle](https://github.com/FedeManzano/bodystyle)

---

<p align="center">
  <strong>Template Docs © 2024</strong> - Desarrollado con ❤️
</p>
