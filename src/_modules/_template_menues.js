
const InitMenues = () => {

     /**
     * Carga la barra de navegación principal
     */
    document.getElementById("sidebar").innerHTML =
        `
        <div class="bs-sidebar-title" data-target="#l1">
            <label>🚀 Iniciación</label>
        </div>
        <div class="bs-sidebar-drop-list" id="l1">
            <ul>
                    <li><a href="../index.html" class="com-trigger" data-info="Enlace a la página de inicio.">✨ Home</a></li>
                    <li><a href="get_started.html" class="com-trigger" data-info="Iniciación, descarga e instalación de la biblioteca.">🚀 Get Started</a></li>
                    <li><a href="medidas.html" class="com-trigger" data-info="Breakpoint de toda la biblioteca.">💡 Medidas</a></li>
                    <li><a href="colores.html" class="com-trigger" data-info="Paleta de colores de la biblioteca.">🎨 Colores</a></li>
                    <li><a href="desactivado.html" class="com-trigger" data-info="Estado desactivado de elementos.">❌ Desactivado</a></li>
                    <li><a href="texto.html" class="com-trigger" data-info="Estilos y formatos de texto.">📝Texto</a></li>
                    <li><a href="tablas.html" class="com-trigger" data-info="Tablas y sus estilos.">📊 Tablas</a></li>
                    <li><a href="bordes.html" class="com-trigger" data-info="Estilos de bordes.">🧱 Bordes</a></li>
                    <li><a href="opacidad.html" class="com-trigger" data-info="Niveles de opacidad.">🖼️ Opacidad</a></li>
                    <li><a href="overflow.html" class="com-trigger" data-info="Manejo de overflow.">📜 Overflow</a></li>
                    <li><a href="display.html" class="com-trigger" data-info="Manejo de display.">🖥️ Display</a></li>    
                </ul>
            </div>
            <div class="bs-sidebar-title" data-target="#l2">
                <label>🌈 CSS</label>
            </div>
            <div class="bs-sidebar-drop-list" id="l2">
                <ul>
                    <li><a href="botones.html" class="com-trigger" data-info="Plantilla completa de botones.">📥 Botones</a></li>
                    <li><a href="alertas.html" class="com-trigger" data-info="Todas las alertas ppersonalizados de Bodystyle.">🚨 Alertas</a></li>
                    <li><a href="badges.html" class="com-trigger" data-info="Badges personalizados de Bodystyle.">🏷️ Badges</a></li>
                    <li><a href="grupos_botones.html" class="com-trigger" data-info="Grupos de botones personalizados de Bodystyle.">🔘 Grupos Botones</a></li>
                    <li><a href="tarjetas.html" class="com-trigger" data-info="Tarjetas personalizadas de Bodystyle.">💳 Tarjetas</a></li> 
                    <li><a href="iconos.html" class="com-trigger" data-info="Íconos personalizados de Bodystyle.">💯 Íconos</a></li> 
                    <li><a href="breadcrumbs.html" class="com-trigger" data-info="Breadcrubs personalizados de Bodystyle.">🔗 Breadcrumbs</a></li>
                    <li><a href="solapas.html" class="com-trigger" data-info="Badge sobresaliente que provee Bodystyle.">💄 Solapas</a></li>
                    <li><a href="compartir.html" class="com-trigger" data-info="Badge de elemento compartido.">🤝 Compartir</a></li>
                    <li><a href="mensajes.html" class="com-trigger" data-info="Badge en formato de viñeta.">💬 Mensajes</a></li>
                    <li><a href="efecto3d.html" class="com-trigger" data-info="Efecto 3D con CSS.">💎 Efecto 3D</a></li>
                    <li><a href="formas.html" class="com-trigger" data-info="Formas en css para aplicarle a los elementos.">😊 Formas</a></li>
                    <li><a href="decorador.html" class="com-trigger" data-info="Dedoradores para mejorar la estética de los títulos.">🖌️ Decoradores</a></li>
                    <li><a href="efecto_hover.html" class="com-trigger" data-info="Efecto Hover para decorar elementos y hacerlos más interactivos.">⭐ Efecto Hover</a></li>
                    <li><a href="colecciones.html" class="com-trigger" data-info="Listado de elementos para agruparlos y presentarlos.">🎁 Colecciones</a></li>
                    </ul>
            </div>
        <div class="bs-sidebar-title" data-target="#l3">
            <label>🎛️ Alineamiento</label>
        </div>
        <div class="bs-sidebar-drop-list" id="l3">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Perfiles</a></li>
                <li><a href="">Estadísticas</a></li>
                <li><a href="">Correos</a></li>
            </ul>
        </div>
        <div class="bs-sidebar-title" data-target="#l4">
            <label>📝 Formularios</label>
        </div>
        <div class="bs-sidebar-drop-list" id="l4">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Perfiles</a></li>
                <li><a href="">Estadísticas</a></li>
                <li><a href="">Correos</a></li>
            </ul>
        </div>
        <div class="bs-sidebar-title" data-target="#l5">
            <label>🟨 JS</label>
        </div>
        <div class="bs-sidebar-drop-list" id="l5">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Perfiles</a></li>
                <li><a href="">Estadísticas</a></li>
                <li><a href="">Correos</a></li>
            </ul>
        </div>
        <div class="bs-sidebar-title" data-target="#l6">
            <label>🔥 Navegación</label>
        </div>
        <div class="bs-sidebar-drop-list" id="l6">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Perfiles</a></li>
                <li><a href="">Estadísticas</a></li>
                <li><a href="">Correos</a></li>
            </ul>
        </div>
        `

        /**
     * Carga la barra de navegación lateral (sidebar)
     */
    document.getElementById("nav").innerHTML =
        `<div class="bs-nav-md align-left-list">
                <a class="btn-menu"></a>

                <a href="#" class="logo-container">
                    <img id="logo_marca" class="disparador" data-info="" class="bor-rad-por-50" src="../images/logo.png" alt="Foto de perfil">
                </a>

                <div class="ocultar-desde-medianos">
                    <ul>
                        <li><a href="../index.html">Inicio</a></li>
                        <li><a href="https://github.com/FedeManzano/bodystyle">Repositorio</a></li>
                    </ul>
                </div>
                <div class="right-content">
                <a href="#" class="com-trigger" data-info="Botón que permite descargar el documento"><i class="bs-download fz-30 c-bodyui mr-2"></i></a>
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