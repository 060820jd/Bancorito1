// Mostrar el modal de inicio de sesión al cargar la página
window.onload = function() {
    var modal = document.getElementById("login-modal");
    modal.style.display = "block";
  
    // Cerrar el modal al hacer clic en la X
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
      modal.style.display = "none";
    
    }
  // Agregamos un evento de clic a la imagen
document.getElementById("imagen").addEventListener("click", function() {
  // Abre una nueva ventana
  var ventanaEmergente = window.open("", "_blank", "width=400,height=300");

  // Construye el contenido que deseas mostrar en la ventana emergente
  var contenido = "<h1>Informacion de la pelicula</h1>";
  contenido += "<p>SINOPSIS:Kung Fu Panda es una película de animación producida por DreamWorks Animation que sigue la historia de Po, un panda torpe y soñador que trabaja en la tienda de fideos de su padre adoptivo. Sin embargo, su vida cambia drásticamente cuando es elegido por accidente como el legendario Guerrero Dragón destinado a proteger el Valle de la Paz del malvado Tai Lung. A pesar de su falta de habilidad y experiencia en artes marciales, Po es entrenado por el maestro Shifu y los legendarios Cinco Furiosos para cumplir con su destino y aprender el verdadero significado del kung fu. A lo largo de su viaje, Po enfrenta desafíos internos y externos mientras lucha por aceptar quién es y descubrir su verdadero potencial. La película combina comedia, acción y corazón, y transmite mensajes de autoaceptación, determinación y perseverancia.</p><p>Duracion:90 minutos.</p><p>Año de publicacion:13 de Junio de 2008</p>";

  // Inserta el contenido en la ventana emergente
  ventanaEmergente.document.write(contenido);
}

);

    // Mostrar información de contacto al hacer clic en el botón
    var contactBtn = document.getElementById("contact-btn");
    contactBtn.onclick = function() {
      var contactInfo = document.getElementById("contact-info");
      if (contactInfo.style.display === "none") {
        contactInfo.style.display = "block";
      } else {
        contactInfo.style.display = "none";
      }
    }
  
    // Validar el formulario de inicio de sesión
    var loginForm = document.getElementById("login-form");
    loginForm.onsubmit = function(event) {
      event.preventDefault(); // Evitar que se envíe el formulario
      // Aquí puedes agregar la lógica para verificar la edad, el nombre y la contraseña
      // Por ahora, simplemente cerramos el modal
      modal.style.display = "none";
    }
  }
  function abrirVentanaEmergente() {
    document.getElementById("ventanaEmergente").style.display = "block";
  }
  
  function cerrarVentanaEmergente() {
    document.getElementById("ventanaEmergente").style.display = "none";
  }
  