alert("Solo los administradores pueden registrarse e iniciar sesión, si eres usuario dale click al boton 🏠︎");

function validateForm() {
    var emails = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!emailRegex.test(emails)) {
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

    //VALIDACION INICIO DE CUENTA (INICIA SESION SOLO SI LA CUENTA ESTA REGISTRADA)
    if(localStorage.getItem(email)){
        let json = JSON.parse(localStorage.getItem(email))
        if(json.password==password){
            alert("Has iniciado sesion satisfactoriamente!")
            window.location.href='../../html/inicio/inicio-a.html';
        } else {
            alert("La contraseña es incorrecta!");
        }

    }
    else{
        alert("Esta cuenta no esta registrada!")
    }

    console.log("Cuenta iniciada!");

}
function limpiarFormulario() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}
