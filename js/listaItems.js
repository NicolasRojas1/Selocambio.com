        // Función que se ejecuta al hacer clic en una categoría
        function mostrarImagen(event) {
          event.preventDefault();

          // Obtener la URL de la imagen de la categoría seleccionada
          const imagenURL = event.target.getAttribute("data-imagen");

          // Crear un elemento "img" con la URL de la imagen
          const imagen = document.createElement("img");
          imagen.src = imagenURL;

          // Mostrar la imagen en la columna de resultados
          const imagenesDiv = document.getElementById("imagenes");
          imagenesDiv.innerHTML = "";
          imagenesDiv.appendChild(imagen);
      }

      // Agregar un evento de clic a cada enlace de categoría
      const enlacesCategorias = document.querySelectorAll(".categoria");
      for (let i = 0; i < enlacesCategorias.length; i++) {
          enlacesCategorias[i].addEventListener("click", mostrarImagen);
      }