// Agregamos un evento de clic a la imagen
document.getElementById("imagen").addEventListener("click", function () {
  // Abre una nueva ventana
  var ventanaEmergente = window.open("", "_blank", "width=400,height=300");

  // Construye el contenido que deseas mostrar en la ventana emergente
  var contenido = "<h1>Informacion de la pelicula</h1>";
  contenido += "<p>SINOPSIS:Kung Fu Panda es una película de animación producida por DreamWorks Animation que sigue la historia de Po, un panda torpe y soñador que trabaja en la tienda de fideos de su padre adoptivo. Sin embargo, su vida cambia drásticamente cuando es elegido por accidente como el legendario Guerrero Dragón destinado a proteger el Valle de la Paz del malvado Tai Lung. A pesar de su falta de habilidad y experiencia en artes marciales, Po es entrenado por el maestro Shifu y los legendarios Cinco Furiosos para cumplir con su destino y aprender el verdadero significado del kung fu. A lo largo de su viaje, Po enfrenta desafíos internos y externos mientras lucha por aceptar quién es y descubrir su verdadero potencial. La película combina comedia, acción y corazón, y transmite mensajes de autoaceptación, determinación y perseverancia.</p><p>Duracion:90 minutos.Año de publicacion</p>";

  // Inserta el contenido en la ventana emergente
  ventanaEmergente.document.write(contenido);
},
  {}
);
