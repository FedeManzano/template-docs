/**
 * Archivo con información a través de elementos dinámicos proporcionados por BodyUI.
 * @module Info
 * @author Federico Manzano <Estudiante de Ingeniería en Informática>
 */
const InfoInit = () => {


    /**
     * Carga en el ID "autor_content" el contenido dinámico del autor.
     * @type {string}
     */
    document.getElementById("autor_content").innerHTML =
        `
        <div class="f-flex just-center">
            <h6 class="ta-c fz-18">
                Con mucho <i class="bs-heart c-red fz-20 mt-1">&nbsp;</i>
                <a id="autor_enlace" href="[URL AUTOR]" target="_blank" class="link disparador" data-info="">[CONTENIDO DEL ENLACE]</a>
            </h6>
        </div>
        `


    /**
     * Información del autor para los tooltips. 
     *  @type {string}
     */
    let info_autor = 
    `
    <div class="card-notification-dark "> 
        <div class="row">
            <div class="cl-4 card-logo">
                 <img class="img-responsive bor-rad-por-50" src="[URL IMAGEN]" alt="Logo" width="60" height="60">
            </div>
            <div class="cl-8">
                <h4 class="title">[TITULO DE LA TARJETA]</h4>
                <p class="content">[CONTENIDO DE TEXTO QUE DESEA MOSTRAR.]</p>
            </div>
        </div>
    </div>
    `

    // Asignación de la información del autor a los elementos correspondientes.
    document.getElementById("logo_marca").dataset.info = info_autor;

    // Asignación de la información del autor al enlace del autor.
    document.getElementById("autor_enlace").dataset.info = info_autor;

    // Información general de Bodystyle para el elemento con ID "info_general".
    // @type {string}
    document.getElementById("info_general").innerHTML =
        `
    <div id="card_general" class="card-notification-dark"> 
        <div class="row">
            <div class="cl-4 card-logo">
                 <img class="img-responsive" src="[URL IMAGEN]" alt="Logo Bodystyle" width="60" height="60">
            </div>
            <div class="cl-8">
                <h4 class="title">[TITULO DE LA TARJETA]</h4>
                <p class="content m-0">[CONTENIDO DE TEXTO QUE DESEA MOSTRAR.]</p>
            </div>
        </div>
    </div>
    <div class="mt-3"> 
        <a class="btn-lg-o btn-bodyui-o bor-pill com-trigger" data-info="[INFO TARJETA]<span class='f-w-7'>[RESALTADO]</span> [MAS INFO]" data-pos='right' href="[URL DE REFERENCIA]" target="_blank">
            <i class='bs-download fz-27'>&nbsp;</i>[TEXTO DEL BOTÓN]
        </a>
    </div>
    `

    // Reasignación del contenido dinámico del autor en el ID "autor_content".
    // @type {string}
    document.getElementById("autor_content").innerHTML =
        `
        <div class="f-flex just-center">
            <h6 class="ta-c fz-18">
                Con mucho <i class="bs-heart c-red fz-20 mt-1">&nbsp;</i>
                <a id="autor_enlace" href="[URL AUTOR]" target="_blank" class="link disparador" data-info="">[CONTENIDO DEL ENLACE]</a>
            </h6>
        </div>
        `
}


const Info = {
    Init: () => InfoInit()
}

export default Info