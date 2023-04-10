// Obtener una referencia al botón "Agregar al carrito"
const botonAgregar = document.getElementById("boton-agregar");

// Cuando se hace clic en el botón "Agregar al carrito"
botonAgregar.addEventListener("click", () => {

  // Obtener el valor del campo de entrada "Nombre del producto"
  const nombreProducto = document.getElementById("nombre-producto").value;

  // Crear un objeto "producto" con el nombre del producto y un código generado automáticamente
  const producto = {
    nombre: nombreProducto,
    codigo: generarCodigo()
  };

  // Enviar una solicitud POST al servidor para crear el nuevo producto
  enviarFetch(producto);
  
});

function enviarFetch(producto) {
  // Construir la URL del endpoint de la API
  const urlBack = "https://selocambio.api/crearProducto";

  // Convertir el objeto "producto" a formato JSON
  const data = JSON.stringify(producto);

  // Enviar la solicitud POST al servidor utilizando la API fetch
  fetch(urlBack, {
    method: "POST",
    body: data
  })
    .then(response => {
      // Si la solicitud fue exitosa, mostrar un mensaje al usuario
      if (response.ok) {
        alert("El producto fue agregado al carrito exitosamente.");
      }
    })
    .catch(error => {
      // Si ocurrió un error, mostrar un mensaje de error al usuario
      alert("Ocurrió un error al agregar el producto al carrito.");
      console.error(error);
    });
}

function generarCodigo() {
  // Generar un código aleatorio de 8 caracteres utilizando letras y números
  const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let codigo = "";
  for (let i = 0; i < 8; i++) {
    codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return codigo;
}
