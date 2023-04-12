

let dniAnterior = localStorage.getItem('session');

if (!dniAnterior) {
  window.location.href = '/html/error.html';
  localStorage.removeItem("session");
  localStorage.removeItem("user");
}

function cuenta() {



  let registro = localStorage.getItem("session");

  console.log(registro);

  if (registro !== null) {

    let user = JSON.parse(localStorage.getItem(registro));
    
    fetch(`https://backend-selocambio-production.up.railway.app/admin/buscar-dni/${registro}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Error en la respuesta del servidor');
    }
    return response.json();
  })
  .then(data => {
    const user = data[0]; // acceder al primer elemento del array
    const alerta = `Cuenta de ${user.nombre} ${user.apellido}\n📞 ${user.telefono}\n📧 ${user.correo}`;
    alert(alerta);
  })
  .catch(error => console.error('Error al obtener los datos del usuario:', error));

  

  } else {
    localStorage.removeItem("session");
    localStorage.removeItem("user");
  }
}


function ventana() {
  let opcion = confirm("¿Esta seguro que quiere cerrar sesion?");
  if (opcion == true) {
    localStorage.removeItem("session");
    window.location.href='/html/inicio.html';
  } else {}
}