function crearOferta() {
    
    const idOferta = "";
    const nombreCli = document.getElementById("nombreCli").value;
    const telefonoCli = document.getElementById("telefonoCli").value;
    const correoCli = document.getElementById("correoCli").value;
    const interesCli = document.getElementById("interesCli").value;
    const nombreProd = document.getElementById("nombreProd").value;
    const categoriaProd = document.getElementById("categoriaProd").value;
    const descripcionProd = document.getElementById("descripcionProd").value;
    const imagenProd = document.getElementById("imagenProd").value;
  
    // Almacenamiento de los datos en la Base de datos
    const oferta = { idOferta, nombreCli, telefonoCli, correoCli, interesCli, nombreProd, categoriaProd, descripcionProd, imagenProd };
  
    /*console.log(idOferta);
    console.log(" ");
    console.log(oferta.idOferta);*/

    console.log("Petición para crear una oferta");
  
    const API_URL = "https://backend-selocambio-production.up.railway.app";
    let crearOferta = fetch(`${API_URL}/oferta/crear`, {
      method: "POST",
      body: JSON.stringify(oferta),
      headers: { "Content-type": "application/json; charset=UTF-8" }
    })
  
    console.log("Se ha creado la oferta en la base de datos!");
    alert("Se ha creado la oferta en la base de datos!");
    location.reload();
  
  }