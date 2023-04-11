function eliminarOferta() {

  //event.preventDefault(event);

  const idOferta = document.getElementById("idOfertaD").value;

  const API_URL = "https://backend-selocambio-production.up.railway.app";

    // Solicitar dato de ID del objeto oferta
    const oferta = { idOferta };

  fetch(`${API_URL}/oferta/eliminar/${idOferta}`, {
    method: "DELETE",
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

    console.log("Se ha intentado eliminar la oferta!");
    alert("Se ha intentado eliminar la oferta!");
  
}