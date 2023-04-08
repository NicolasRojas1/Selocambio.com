

let dniAnterior = localStorage.getItem('ultimaSesion');

if (!dniAnterior) {
  window.location.href = '/html/error.html';
  localStorage.removeItem("ultimaSesion");
}

function cuenta() {
  let registro = localStorage.getItem("ultimaSesion");
  if (registro !== null) {
    let usuario = JSON.parse(localStorage.getItem(registro));
    const alerta = `
Cuenta de ${usuario.nombre} ${usuario.apellido}
\n📨 Correo: ${usuario.correo}\n📱 Teléfono: ${usuario.telefono}\n🆔 DNI: ${usuario.dni}\n🔞 Edad: ${usuario.edad}\n`;
    alert(alerta);
  } else {localStorage.removeItem("ultimaSesion");}
}

function ventana() {
  let opcion = confirm("¿Esta seguro que quiere cerrar sesion?");
  if (opcion == true) {
    localStorage.removeItem("ultimaSesion");
    window.location.href='/html/inicio.html';
  } else {}
}