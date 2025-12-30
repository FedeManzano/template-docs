

const InfoInit = () => {

    document.getElementById("autor_content").innerHTML =
        `
        <div class="f-flex just-center">
            <h6 class="ta-c fz-18">
                Con mucho <i class="bs-heart c-red fz-20 mt-1">&nbsp;</i>
                <a id="autor_enlace" href="https://github.com/FedeManzano" target="_blank" class="link disparador" data-info="">Federico Manzano</a>
            </h6>
        </div>
        `

     let info_autor = 
    `
    <div class="card-notification-dark "> 
        <div class="row">
            <div class="cl-4 card-logo">
                 <img class="img-responsive bor-rad-por-50" src="https://bodystyle.webcindario.com/imagenes/20191106_205049.png" alt="Logo Bodystyle" width="60" height="60">
            </div>
            <div class="cl-8">
                <h4 class="title">Federico Manzano</h4>
                <p class="content">Estudiante de Ingeniería en Informática de la Universidad Nacional de La Matanza.</p>
            </div>
        </div>
    </div>
    `

    document.getElementById("logo_marca").dataset.info = info_autor;
    document.getElementById("autor_enlace").dataset.info = info_autor;


    document.getElementById("info_general").innerHTML =
        `
    <div id="card_general" class="card-notification-dark"> 
        <div class="row">
            <div class="cl-4 card-logo">
                 <img class="img-responsive" src="../images/logo.png" alt="Logo Bodystyle" width="60" height="60">
            </div>
            <div class="cl-8">
                <h4 class="title">Bodystyle Framework</h4>
                <p class="content m-0">Librería CSS completa para construir interfaces modernas y responsivas con facilidad.</p>
            </div>
        </div>
    </div>
    <div class="mt-3"> 
        <a class="btn-lg-o btn-bodyui-o bor-pill com-trigger" data-info="Botón que permite descargar la <span class='f-w-7'>Versión 6.5.0</span> transpilada y procesada, no incluye el código fuente." data-pos='right' href="https://bodystyle.webcindario.com/descargas/bodystyle-6.5.0.zip" download>
            <i class='bs-download fz-27'>&nbsp;</i>Descargar
        </a>
    </div>
    `

    document.getElementById("autor_content").innerHTML =
        `
        <div class="f-flex just-center">
            <h6 class="ta-c fz-18">
                Con mucho <i class="bs-heart c-red fz-20 mt-1">&nbsp;</i>
                <a id="autor_enlace" href="https://github.com/FedeManzano" target="_blank" class="link disparador" data-info="">Federico Manzano</a>
            </h6>
        </div>
        `
}


const Info = {
    Init: () => InfoInit()
}

export default Info