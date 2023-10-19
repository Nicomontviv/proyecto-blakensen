// Obtener todos los elementos con el ID mostrarFormulario
var botonesMostrarFormulario = document.querySelectorAll('#mostrarFormulario');
var formularios = document.querySelectorAll('#formularioContenedor');
// Iterar a través de todos los elementos y agregar el event listener
botonesMostrarFormulario.forEach(function(boton) {
    boton.addEventListener('click', function() {
        formularios.forEach(function(formulario){ formulario.classList.toggle('oculto')});
        this.style.display = 'none'; 
        this.classList.add('agrandar-achicar');
    });
});

