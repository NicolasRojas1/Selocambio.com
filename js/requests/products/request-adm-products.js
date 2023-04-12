const API_URL = "https://backend-selocambio-production.up.railway.app";

function manejoDePeticiones(datos) {
  const generarHTML = document.querySelector("#productosadm");

  const componenteHTML = datos.map(oferta => `
  <tr>
  <td>
    <span class="custom-checkbox">
      <input type="checkbox" id="checkbox1" name="options[]" value="1">
      <label for="checkbox1"></label>
    </span>
  </td>
  <td>${oferta.idOferta}</td>
  <td><img src="${oferta.imagenProd}" class="avatar" alt="Avatar" style="width: 100px; height: 100px; object-fit: cover; border-radius: 5px;"></td>
  <td>${oferta.nombreProd}</td>
  <td>${oferta.descripcionProd}</td>
  <td>${oferta.categoriaProd}</td>
  <td>${oferta.nombreCli}</td>
  <td>${oferta.telefonoCli}</td>
  <td>${oferta.correoCli}</td>

  <td>

        </td> 
        </tr>
        
        <script src="/js/requests/admin/request-adm-product-edit.js"></script>
`);

  generarHTML.innerHTML = `<div class="item">${componenteHTML}<div>`;

}

fetch(`${API_URL}/oferta/obtener`)
  .then(response => {
    if (!response.ok) {
      throw new Error("No se pudo realizar la solicitud a la API");
    }
    return response.json();
  })
  .then(data => manejoDePeticiones(data))
  .catch(error => {
    console.log(error);
    const generarHTML = document.querySelector("#productosadm");
    generarHTML.innerHTML = `<center><br><p>No se pudo obtener la información de la API.</p></center>`;
  });
