const shopContent = document.getElementById('shopContent');


/**Para los productos */
products.forEach((products) => {
  
  let content = document.createElement('div');

  content.className = 'card';

  content.innerHTML = `
  <style>
  img.img_prod" {
    min-height: 200px;
    min-weight: 200px;
    object-fit: cover;
  }

  </style>
  <img class="img_prod" src="${products.img}"></img>
  <h2>${products.nombre}</h2>
  <h4>${products.vendedor}</h4>
  <p class="description">${products.descripcion}</p>
  <a href="http://wa.me/57${products.telefono}?text=Hola ${products.vendedor}, vi tu oferta de ${products.nombre} en la pagina de Selocambio.com. ¿En qué estás interesado para poder hacerte el cambio?" target="_blank"> Selocambio
  `;

  shopContent.append(content);
  let seLoCambio = document.createElement("button");
  seLoCambio.innerHTML = " ";
});





