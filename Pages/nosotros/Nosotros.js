// Función para las pestañas de Nosotros
function abrirTab(evt, tabName) {
    let i, panels, btns;
    
    // Ocultar todos los paneles
    panels = document.getElementsByClassName("tab-panel");
    for (i = 0; i < panels.length; i++) {
        panels[i].style.display = "none";
    }
    
    // Desactivar todos los botones
    btns = document.getElementsByClassName("btn-tab");
    for (i = 0; i < btns.length; i++) {
        btns[i].classList.remove("activo");
    }
    
    // Mostrar el panel seleccionado y activar el botón
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("activo");
}

// El código de scroll suave que ya teníamos también funcionará aquí