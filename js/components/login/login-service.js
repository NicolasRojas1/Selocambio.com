alert("Solo los administradores pueden registrarse e iniciar sesión, si eres usuario dale click al boton 🏠︎");

function cleanForm() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("edad").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("correo").value = "";
  document.getElementById("contraseña").value = "";
  document.getElementById("contraseña-confirmacion").value = "";
  document.getElementById("codigo-acceso").value = "";
  console.log("Datos limpiados!");
}

function signUpFunc() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const dni = document.getElementById("dni").value;
  const edad = document.getElementById("edad").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const contraseña = document.getElementById("contraseña").value;
  const contraseñaConfirmacion = document.getElementById("contraseña-confirmacion").value;
  const codigoAcceso = document.getElementById("codigo-acceso").value;

  // Expresiones regulares para validar los datos
  const nombreRegEx = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+$/;
  const dniRegEx = /^\d{6,10}$/;
  const telefonoRegEx = /^\d{9}$/;
  const correoRegEx = /^\S+@\S+\.\S+$/;
  const contraseñaRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Validación de los datos

  if (!nombreRegEx.test(nombre)) {alert("Ingresa un nombre válido.");return;}
  if (!nombreRegEx.test(apellido)) {alert("Ingresa un apellido válido.");return;}
  if (!dniRegEx.test(dni)) {alert("Ingresa un número de identificación válido.");return;}
  if (edad < 18) {alert("Ingresa una edad que afirme que eres mayor de edad.");return;}
  if (!telefonoRegEx.test(telefono)) {alert("Ingresa un número de teléfono válido.");return;}
  if (!correoRegEx.test(correo)) {alert("Ingresa una dirección de e-mail válida.");return;}
  if (!contraseñaRegEx.test(contraseña)) {alert("La contraseña ingresada no es válida. Debe tener al menos \n 8 caracteres \n una letra mayúscula \n una letra minúscula \n un número \n \n Ejemplo: ProbarContraseña1");return;}
  if (contraseña !== contraseñaConfirmacion) {alert("Las contraseñas ingresadas no coinciden.");return;}
  if (codigoAcceso !== "ahimiramos23") {alert("Necesitas un código Selocambio valido para registrarte");return;}

  // Almacenamiento de los datos en el LocalStorage
  const usuario = {nombre,apellido,dni,edad,telefono,correo,contraseña};
  localStorage.setItem(dni, JSON.stringify(usuario));
  console.log("Cuenta registrada!");
  cleanForm();

  alert("¡Has registrado tu cuenta correctamente!, se ha limpiado el formulario, ahora puedes iniciar sesion");
}

function loginFunc() {

  const dni = document.getElementById("login-dni").value;
  const contraseña = document.getElementById("login-contraseña").value;
  const codigoAcceso = document.getElementById("login-codigo-acceso").value;

  // Expresiones regulares para validar los datos
  const correoRegEx = /^\S+@\S+\.\S+$/;
  const contraseñaRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  // Validación del correo electrónico
  if (!localStorage.getItem(dni)) {
    alert("La cuenta ingresada no está registrada");
    return;
  }
  if (!contraseñaRegEx.test(contraseña)) {
    alert("La contraseña ingresada no es válida. Debe tener al menos \n 8 caracteres \n una letra mayúscula \n una letra minúscula \n un número \n \n Ejemplo: ProbarContraseña1");
    return;
  }
  if (codigoAcceso !== "ahimiramos23") {
    alert("Necesitas un código Selocambio para valido iniciar sesion");
    return;
  }


// Obtener el valor actual de ultimaSesion del localStorage
let dniAnterior = localStorage.getItem('ultimaSesion');

// Verificar si el valor actual de ultimaSesion es diferente al nuevo valor de dni
if (dniAnterior !== dni) {
  // Buscar en el localStorage el objeto de usuario con la misma DNI
  let usuarioEncontrado = null;
  const usuarios = Object.keys(localStorage);
  for (let i = 0; i < usuarios.length; i++) {
    const clave = usuarios[i];
    if (clave !== 'ultimaSesion') {
      const usuario = JSON.parse(localStorage.getItem(clave));
      if (usuario.dni === dni) {
        usuarioEncontrado = usuario;
        break;
      }
    }
  }
  // Si no se encuentra el usuario, actualizar ultimaSesion con el valor actual de dni
  if (!usuarioEncontrado) {
    localStorage.setItem('ultimaSesion', dni);
  } else {
    // Actualizar el valor de ultimaSesion en el localStorage con el nuevo valor de dni del usuario encontrado
    dniAnterior = usuarioEncontrado.dni;
    localStorage.setItem('ultimaSesion', dniAnterior);
  }
}

  console.log("Cuenta logueada!");
  window.location.href = "/html/admin.html";

}