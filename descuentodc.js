document.getElementById('mostrarInput').addEventListener('click', function() {
    document.getElementById('codigoInput').style.display = 'block';
    document.getElementById('mostrarInput').style.display = 'none';
  });
  
  document.getElementById('verificarCodigo').addEventListener('click', function() {
    var codigoIngresado = document.getElementById('codigoDescuento').value;
    if (codigoIngresado === 'DAYGAMEBLAK') {
      document.getElementById('codigoCorrecto').style.display = 'block';
      document.getElementById('boton1').style.display = 'none';
      document.getElementById('boton2').style.display = 'block';
      document.getElementById('codigoIncorrecto').style.display = 'none';
    } else {
      document.getElementById('codigoIncorrecto').style.display = 'block';
      document.getElementById('codigoCorrecto').style.display = 'none';
      document.getElementById('mensajeError').innerText = 'Ese código no existe';
    }
  });
  