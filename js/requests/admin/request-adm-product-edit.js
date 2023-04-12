function editarOferta() {

  const idOferta = document.getElementById("idOfertaE").value;
  const nombreCli = document.getElementById("nombreCliE").value;
  const telefonoCli = document.getElementById("telefonoCliE").value;
  const correoCli = document.getElementById("correoCliE").value;
  const interesCli = document.getElementById("interesCliE").value;
  const nombreProd = document.getElementById("nombreProdE").value;
  const categoriaProd = document.getElementById("categoriaProdE").value;
  const descripcionProd = document.getElementById("descripcionProdE").value;
  const imagenProd = document.getElementById("imagenProdE").value;
  const API_URL = "https://backend-selocambio-production.up.railway.app";

  console.log("Petición para editar una oferta");

  // Almacenamiento de los datos en la Base de datos
  const oferta = { 
    idOferta, nombreCli, telefonoCli, correoCli, interesCli, nombreProd, categoriaProd, descripcionProd, imagenProd 
  };
  
  // Función para pruebas
  function editarOferta(data) {

    console.log(data);
    console.log(oferta);

  }
  
  // Realizar la petición 1 para obtener las ofertas
  fetch(`${API_URL}/oferta/obtener`)
    .then(response => {
      if (!response.ok) {
        throw new Error("No se pudo realizar la solicitud a la API");
      }
      return response.json();
    })
    .then(data => {

      // Realizar la petición 2 para editar la oferta
      return fetch(`${API_URL}/oferta/editar/${idOferta}`, {
        method: "POST",
        body: JSON.stringify(oferta),
        headers: { "Content-type": "application/json; charset=UTF-8" }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("No se pudo realizar la solicitud a la API");
          }
          return response.json();
        })
        .then(data => editarOferta(data))
        .catch(error => {
          console.log(error);
          const generarHTML = document.querySelector("#productosadm");
          generarHTML.innerHTML = `<center><br><p>No se pudo editar la oferta.</p></center>`;
        });
    })
    .catch(error => {
      console.log(error);
      const generarHTML = document.querySelector("#productosadm");
      generarHTML.innerHTML = `<center><br><p>No se pudo obtener la información de la API.</p></center>`;
    });

    console.log("Se ha editado la oferta en la base de datos!");
    alert("Se ha editado la oferta en la base de datos!");
    location.reload();
}