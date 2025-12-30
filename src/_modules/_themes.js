

const InitScrollSpyDark = () => {
    let conf = {
        ancho: 16, // Ancho en porcentaje del scrollspy
        tamFuente: 17, // Tamaño de la fuenta
        colorBorde: "fd-bodyui", // color del borde
        alturaBorde: 30, // Altura del elemento dinámico borde
        separacion: 100, // Separación con respecto al inicio de la pantalla propiedad TOP
        colorSeleccionado: "#fff", // Color del enlace seleccionado
        colorNoSeleccionado: "#ccc" // Color del enlace no seleccionado
    }
    // Inicialización con la conf
    BS.ScrollSpyInit(conf)
    // Agregar enlaces a los títulos DESPUÉS del ScrollSpy
    // addHeadingLinks()
}

const InitScrollSpyLight = () => {
    let conf = {
        ancho: 16, // Ancho en porcentaje del scrollspy
        tamFuente: 17, // Tamaño de la fuenta
        colorBorde: "fd-bodyui", // color del borde
        alturaBorde: 30, // Altura del elemento dinámico borde
        separacion: 100, // Separación con respecto al inicio de la pantalla propiedad TOP
        colorSeleccionado: "#000", // Color del enlace seleccionado
        colorNoSeleccionado: "#ccc" // Color del enlace no seleccionado
    }
    // Inicialización con la conf
    BS.ScrollSpyInit(conf)
    // Agregar enlaces a los títulos DESPUÉS del ScrollSpy
    //        addHeadingLinks()
}


const LoadThemeDark = () => {
    document.body.classList.add('theme-dark');
    document.getElementById("sidebar").classList.remove("bs-sidebar-drop-light")
    document.getElementById("sidebar").classList.add("bs-sidebar-drop-dark")
    document.querySelector("html, body").style.backgroundColor = "#1a1a1a";
    document.querySelectorAll("table").forEach((table) => {
        table.classList.add("fd-gris-n")
        table.querySelectorAll("th, td").forEach((celda) => {
            celda.classList.add("c-white")
        })
    })
    let spanBusqueda = document.getElementById("span_buscador");
    let inputBusqueda = document.getElementById("buscador");
    document.getElementById("card_general").classList.remove("card-notification-light");
    document.getElementById("card_general").classList.add("card-notification-dark");
    document.getElementById("card_general").classList.add("fd-gris-az-o");
    
    if(spanBusqueda && inputBusqueda) {
        spanBusqueda.classList.add("c-white");
        spanBusqueda.classList.add("fd-gris-n");
        inputBusqueda.classList.add("c-white");
        inputBusqueda.classList.add("fd-gris-n");
    }
    InitScrollSpyDark()
}


const LoadThemeLight = () => {
    document.body.classList.remove('theme-dark');
    document.getElementById("sidebar").classList.remove("bs-sidebar-drop-dark")
    document.getElementById("sidebar").classList.add("bs-sidebar-drop-light")
    document.querySelector("html, body").style.backgroundColor = "#fff";
    document.querySelectorAll("table").forEach((table) => {
        table.classList.remove("fd-gris-n")
        table.querySelectorAll("th, td").forEach((celda) => {
            celda.classList.remove("c-white")
        })
    })
    document.getElementById("card_general").classList.remove("card-notification-dark");
    document.getElementById("card_general").classList.add("card-notification-light");
    document.getElementById("card_general").classList.remove("fd-gris-az-o");
    let spanBusqueda = document.getElementById("span_buscador");
    let inputBusqueda = document.getElementById("buscador");
    if(spanBusqueda && inputBusqueda) {
        spanBusqueda.classList.remove("c-white");
        spanBusqueda.classList.remove("fd-gris-n");
        inputBusqueda.classList.remove("c-white");
        inputBusqueda.classList.remove("fd-gris-n");
    }
    InitScrollSpyLight()
}





const ThemesInit = () => {
    // Cargar el tema guardado al iniciar la página
    document.addEventListener('DOMContentLoaded', function () {
        
        const savedTheme = localStorage.getItem('theme') || 'dark'; // Por defecto: dark
        const switchElement = document.getElementById('sw');

        // Aplicar el tema guardado o dark por defecto
        if (savedTheme === 'dark') {
            LoadThemeDark()
            switchElement.checked = false;
        } else {
            LoadThemeLight()
            switchElement.checked = true;
        }
    });

    // Guardar la preferencia cuando cambia el switch
    document.getElementById("sw").addEventListener("change", function () {
        if (this.checked) {
            LoadThemeLight()
            localStorage.setItem('theme', 'light'); // Guardar en localStorage
        } else {
            LoadThemeDark()
            localStorage.setItem('theme', 'dark'); // Guardar en localStorage
        }
    });
}


const ThemesDocs = {
    Init: () => ThemesInit()   
}

export default ThemesDocs