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







/* section publicaciones */
let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

/* section publicaciones --------- fin*/