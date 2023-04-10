const API_URL = "https://backend-selocambio-production.up.railway.app";

function manejoDePeticiones(datos) {

  const generarHTML = document.querySelector("#productos");

  const componenteHTML = datos.map(oferta => `

  <style>
  img.img_prod" {
    min-height: 200px;
    min-weight: 200px;
    object-fit: cover;
  }
  </style>

  <div class="shopContent">
  <div class="card">
  
  <img class="img_prod" src="${oferta.imagenProd}" alt="Imagen de ${oferta.nombreProd}" height="200" width="200"></img>
  <h2>${oferta.nombreProd}</h2>
  <h4>Por: ${oferta.nombreCli}</h4>
  <p class="description">Descripción: ${oferta.descripcionProd}</p>

  <p class="interes">Interes por articulos de ${oferta.categoriaProd}</p>


  <a href="http://wa.me/${oferta.telefonoCli}?text=¡Hola ${oferta.nombreCli}! Tengo interes en la oferta que publicaste que se llama ''${oferta.nombreProd}'' en la página de Selocambio, me preguntaba si podrias hacer un intercambio, me gustaria ofrecerte algo a cambio de lo que ofreces ¡Espero tu respuesta!
  " target="_blank">Selocambio</a>
  
  </div>
  </div>

  `);

  generarHTML.innerHTML = `${componenteHTML}`;

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
    const generarHTML = document.querySelector("#productos");
    generarHTML.innerHTML = `<p>No se pudo obtener la información de la API.</p>`;
  });
  