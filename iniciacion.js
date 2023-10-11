document.getElementById('mostrarFormulario').addEventListener('click', function() {
    document.getElementById('formularioContenedor').classList.toggle('oculto');
    this.style.display = 'none'; // Oculta el botón al hacer clic en él
    this.classList.add('agrandar-achicar'); // Agrega la clase 'agrandar-achicar'

});
