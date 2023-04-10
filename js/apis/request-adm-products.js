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
  <td><img src="${oferta.imagenProd}" class="avatar" alt="Avatar" style="width: 100px; height: 100px; object-fit: cover; border-radius: 5px;"></td>
  <td>${oferta.nombreProd}</td>
  <td>${oferta.descripcionProd}</td>
  <td>${oferta.nombreCli}</td>
  <td>${oferta.telefonoCli}</td>
  <td>${oferta.correoCli}</td>
  <td>
    <select name="${oferta.categoriaProd}" id="lang">
      <option value="seleccion">Selección</option>
      <option value="vehiculos">Vehiculos</option>
      <option value="tecnologia">Tecnologia</option>
      <option value="hogar-muebles">Hogar y Muebles</option>
      <option value="deportes-fitness">Deportes y Fitness</option>
      <option value="belleza">Belleza</option>
      <option value="herramientas">Herramientas</option>
      <option value="moda">Moda</option>
      <option value="juegos">Juegos y Juguetes</option>
    </select>
  </td>
  <td>
    <a href="#editEmployeeModal" class="edit" data-toggle="modal"><i class="material-icons"
        data-toggle="tooltip" title="Editar">&#xE254;</i></a>
    <a href="#deleteEmployeeModal" class="delete" data-toggle="modal"><i class="material-icons"
        data-toggle="tooltip" title="Eliminar">&#xE872;</i></a>
        </td> 
        </tr>
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
