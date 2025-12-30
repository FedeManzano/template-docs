



    const parametrosBusqueda = [
        { 
            nombre: "GetStarted", 
            enlace: "get_started.html",
            tags: ["inicialización", "comenzar", "empezar", "setup", "instalación", "start"] 
        },
        {
            nombre: "Medidas", 
            enlace: "medidas.html",
            tags: ["breakpoints", "medidas", "responsive", "adaptativo", "diseño", "design", "responsive design" ]
        },
        {
            nombre: "Colores", 
            enlace: "colores.html",
            tags: ["colores", "fondos", "background", "paleta", "colors", "palette" ]
        },
        {
            nombre: "Texto", 
            enlace: "texto.html",
            tags: ["texto", "text", "font", "font size", "grosor", "weight" ]
        },
        {
            nombre: "Tablas", 
            enlace: "tablas.html",
            tags: ["tablas", "tables", "table", "data", "grid" ]
        },
        {
            nombre: "Bordes", 
            enlace: "bordes.html",
            tags: ["bordes", "borders", "border", "radio", "radius", "grosor", "thickness" ]
        },
        {
            nombre: "Botones", 
            enlace: "botones.html",
            tags: ["botones", "buttons", "button", "click", "interacción", "interaction" ]
        },
        {
            nombre: "Alertas", 
            enlace: "alertas.html",
            tags: ["alertas", "alerts", "alert", "notificación", "notification", "mensaje", "message" ]
        },
        {
            nombre: "Badges", 
            enlace: "badges.html",
            tags: ["badges", "etiquetas", "labels", "tags", "marcadores" ]
        },
        {
            nombre: "Grupos de Botones", 
            enlace: "grupos_botones.html",
            tags: ["grupos", "botones", "buttons", "button", "click", "interacción", "interaction" ]
        },
        {
            nombre: "Display", 
            enlace: "display.html",
            tags: ["display", "visibilidad", "visibility", "mostrar", "ocultar", "show", "hide", "block", "inline", "inline-block" ]
        },
        {
            nombre: "Tarjetas", 
            enlace: "tarjetas.html",
            tags: ["tarjetas", "cards", "card", "bloques", "contenido", "content" ]
        },
        {
            nombre: "Compartir", 
            enlace: "compartir.html",
            tags: ["share", "compartir", "button", "botón"]
        },
        {
            nombre: "Efecto 3D", 
            enlace: "efecto3d.html",
            tags: ["efecto", "3d", "perspectiva", "giro", "effect"]
        },
        {
            nombre: "Formas", 
            enlace: "formas.html",
            tags: ["formas", "css", "figuras"]
        },
        {
            nombre: "Decorador", 
            enlace: "decorador.html",
            tags: ["titulos", "header", "decorator", "decorador"]
        },
        {
            nombre: "Efecto Hover", 
            enlace: "efecto_hover.html",
            tags: ["efecto", "effect", "hover", "bordes"]
        },
        {
            nombre: "Colecciones", 
            enlace: "colecciones.html",
            tags: ["colecciones", "listas", "list", "collection"]
        }
    ]


let ul = document.createElement("ul");
let lista = document.getElementById("lista-busqueda");
lista.appendChild(ul);
let indexEnlaceSeleccionado = -1;
const PosicionarListaBusqueda =  () => {
    let buscador = document.getElementById("buscador");
    
    if(!buscador) return;
    let offsetLeft = buscador.getBoundingClientRect().left;
    let offsetTop = buscador.getBoundingClientRect().top;
    let lista = document.getElementById("lista-busqueda");
    lista.style.left = (offsetLeft - 75) + "px";
    lista.style.top = (offsetTop + buscador.offsetHeight + 10) + "px";
}
const AparecerListaBusqueda = () => {
    let lista = document.getElementById("lista-busqueda");
    lista.style.display = "block";
}
const DesaparecerListaBusqueda = () => {
    let lista = document.getElementById("lista-busqueda");
    lista.style.display = "none";
}
const LimpiarListaBusqueda = () => {
    let lista = document.getElementById("lista-busqueda");
    lista.children[0].innerHTML = "";
    indexEnlaceSeleccionado = -1;
}

document.getElementById("buscador").addEventListener("keydown", (evento) => {
    let lista = document.getElementById("lista-busqueda");
    let enlaces = lista.querySelectorAll("a");
    
    if (evento.key === "ArrowDown") {
        evento.preventDefault();
        indexEnlaceSeleccionado++;
        if (indexEnlaceSeleccionado >= enlaces.length) {
            indexEnlaceSeleccionado = 0;
        }
        ActualizarSeleccion(enlaces);
    } 
    else if (evento.key === "ArrowUp") {
        evento.preventDefault();
        indexEnlaceSeleccionado--;
        if (indexEnlaceSeleccionado < 0) {
            indexEnlaceSeleccionado = enlaces.length - 1;
        }
        ActualizarSeleccion(enlaces);
    }
    else if (evento.key === "Enter") {
        evento.preventDefault();
        if (indexEnlaceSeleccionado >= 0 && indexEnlaceSeleccionado < enlaces.length) {
            window.location.href = enlaces[indexEnlaceSeleccionado].href;
        }
    }
});
const ActualizarSeleccion = (enlaces) => {
    enlaces.forEach((enlace, index) => {
        if (index === indexEnlaceSeleccionado) {
            enlace.style.backgroundColor = "#c1aaaaff";
            enlace.style.cursor = "pointer";
            enlace.focus();
        } else {
            enlace.style.backgroundColor = "";
        }
    });
};

const RealizarBusqueda = (termino) => {
    PosicionarListaBusqueda()
    let lista = document.getElementById("lista-busqueda");
    parametrosBusqueda.forEach(param => {
        param.tags.forEach(tag => {
            if(tag.toLowerCase().includes(termino.toLowerCase())) {
                
                let busquedaExistente = false;
                lista.querySelector("ul")
                .querySelectorAll("li").forEach(li => {
                    if(li.querySelector("a").textContent === param.nombre) {
                        busquedaExistente = true;
                    }   
                })
                if(busquedaExistente) return;
                
                let li = document.createElement("li");
                let a = document.createElement("a");
                a.href = param.enlace;
                a.textContent = param.nombre;
                a.addEventListener("click", (e) => {
                    e.preventDefault();
                    window.location.href = param.enlace;
                });
                li.appendChild(a);
                lista.children[0].appendChild(li);
                AparecerListaBusqueda();
            }
        })
    })
}

const SearchInit = () => {
    document.getElementById("buscador").addEventListener("input", (evento) => {
        let buscador = evento.target;
        let termino = buscador.value.trim();
        LimpiarListaBusqueda(); 
        if(termino === "") {  
            DesaparecerListaBusqueda();
            return;
        }               

        RealizarBusqueda(termino);              
    });
}

const Search = {
    Init: () => SearchInit()
}

export default Search