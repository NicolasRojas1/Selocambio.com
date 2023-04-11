const API_URL = "https://backend-selocambio-production.up.railway.app";

var data = {idAdministrador: "",
nombre:" ",
apellido:" ",
dni:" ",
edad:" ",
telefono: " ",
correo: " ",
codigo: " ",
password: " "
};

fetch (API_URL+"/admin/guardar-admin", {
  method:"POST",
  body: JSON.stringify(data),
    
})
