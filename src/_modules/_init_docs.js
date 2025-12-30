

const InitDocs = () => {
     let indexPre = 1;
    document.querySelectorAll("pre").forEach(pre => {
        pre.id = "c" + indexPre;
        indexPre++;
    })

    document.querySelectorAll(".btn-copy").forEach(btn => {
        btn.classList.add("tips-ele");
        btn.dataset.tips = "Copy";
        btn.dataset.pos = "top";
    })

    document.querySelectorAll(".btn-copy").forEach(btn => {
        btn.addEventListener("click", (event) => {
            let boton = event.target;
            let pre = boton.closest("label").nextElementSibling;
            if (pre) {
                copiarAlPortapapeles(pre.id);
            }
        });
    });


    function copiarAlPortapapeles(idElemento) {
        if (idElemento === null || idElemento === undefined || idElemento === '#')
            return

        const elemento = document.getElementById(idElemento);
        if (!elemento) return;

        let texto = elemento.textContent;
        texto = texto.replace(/[0-9]+$/, '');

        // Usar la API moderna del portapapeles si está disponible
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(texto).then(() => {
                mostrarToast();
            }).catch(() => {
                // Fallback al método antiguo
                copiarConTextarea(texto);
            });
        } else {
            // Fallback para navegadores antiguos
            copiarConTextarea(texto);
        }
    }

    function copiarConTextarea(texto) {
        const aux = document.createElement("textarea");
        document.body.appendChild(aux);
        aux.value = texto;
        aux.select();
        document.execCommand("copy");
        aux.remove();
        mostrarToast();
    }

    function mostrarToast() {
        const confToast = {
            html: 'Copiado OK',
            clases: ["fd-verde", "bor-rad-10"],
            tiempo: 2000,
            cerrar: false
        };
        BS.Toast(confToast);
    }


    document.querySelectorAll("h1, h2, h3").forEach((element) => {
        if (!element.id || element.id === "" || element.id === undefined) {
            return
        }

        let icono = document.createElement("i")
        let enlace = document.createElement("a")
        enlace.href = "#" + element.id
        enlace.classList.add("heading-link-icon")
        enlace.appendChild(icono)
        element.appendChild(enlace)

        icono.classList.add("bs-link-3")
        icono.classList.add("fz-25")
        icono.classList.add("c-yellow")
        icono.style.cursor = "pointer"
        icono.style.fontWeight = "bold"
        icono.style.opacity = "0.3"
        icono.style.transition = "opacity 0.3s ease"
        icono.style.marginLeft = "10px"
        icono.dataset.info = "Enlace que permite navegar a la sección correspondiente"
        icono.dataset.pos = "right"
        icono.classList.add("com-trigger")

        icono.addEventListener("mouseenter", () => {
            icono.style.opacity = "1"
        })

        icono.addEventListener("mouseleave", () => {
            icono.style.opacity = "0.3"
        })
    })
}

const StartDocs = {
    Init: () => InitDocs()
}

export default StartDocs;