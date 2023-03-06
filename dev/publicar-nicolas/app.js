const shopContent = document.getElementById('shopContent');


/**Para los productos */
products.forEach((products) => {
  let content = document.createElement('div');
  content.className = 'card';
  content.innerHTML = `
  <img src="${products.img}"></img>
  <h2>${products.nombre}</h2>
  <h4>${products.vendedor}</h4>
  <p>${products.descripcion}</p>`;
  
  shopContent.append(content);
  let seLoCambio = document.createElement("button");
  seLoCambio.innerHTML = "Selocambio!";
  content.append(seLoCambio); 

});



