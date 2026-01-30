
/**
 * Módulo que contiene las funciones para
 * inicializar los menús de navegación
 * de la documentación.
 * /**
 * Inicializa los menús de navegación
 */
const InitMenues = () => {

     /**
     * Carga la barra de navegación principal
     */
    document.getElementById("sidebar").innerHTML =
    `
    <div class="bs-sidebar-title" data-target="#l1">
        <label>[CONTENIDO TÍTULO]</label>
    </div>
    <div class="bs-sidebar-drop-list" id="l1">
        <ul>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>
            <li><a href="[ENLACE DE LA PÁGINA PRINCIPAL]" class="com-trigger" data-info="[DESCRIPCIÓN ENLACE.]"> [CONTENIDO DEL ENLACE]</a></li>    
        </ul>
    </div>
    `

    
    /**
     * Menú de navegación superior, principal.
     */
    document.getElementById("nav").innerHTML =
        `<div class="bs-nav-md align-left-list">
                <a class="btn-menu"></a>

                <a href="#" class="logo-container">
                    <img id="logo_marca" class="disparador" data-info="" class="bor-rad-por-50" src="[URL IMÁGEN LOGO]" alt="Foto LOGO">
                </a>

                <div class="ocultar-desde-medianos">
                    <ul>
                        <li><a href="[URL OPCIÓN 1]">[CONTENIDO ENLACE]</a></li>
                        <li><a href="[URL OPCIÓN 2]">[CONTENIDO ENLACE]</a></li>
                    </ul>
                </div>
                <div class="right-content">
                    <a href="#" class="com-trigger" data-info="[DESCRIPCIÓN DEL BOTÓN]"><i class="bs-download fz-30 c-bodyui mr-2"></i></a>
                    <div class="switch-grupo" data-info="Switch que permite cambiar el tema de la página light / dark">
                        <input id="sw" type="checkbox" name="sw_1">
                        <label id="lsw" for="sw" class="switch-rojo com-trigger" data-info="Switch que permite cambiar el tema de la página light / dark"></label>
                    </div>
                </div>
            </div>
        `
}


const Menues = {
    Init: () => InitMenues()
}

export default Menues;