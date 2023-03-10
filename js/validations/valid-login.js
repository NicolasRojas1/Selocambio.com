alert("Solo los administradores pueden registrarse e iniciar sesión, si eres usuario dale clik al boton Home.");

function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(email)) {
        alert("Ingrese una dirección de e-mail válida.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Ingresa una contraseña que contenga: al menos 8 caractares, 1 Mayúscula, 1 Minúscula, 1 Número y No puede haber espacios en blanco.");
        return false;
    }

    login();
    limpiarFormulario();
    return false;
}

function login() {
    console.log("Cuenta iniciada!");
    window.location.href='../../dev/publicar-nicolas/publicaciones-a.html';
}
function limpiarFormulario() {
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
}