
function validateFormS() {
    let name = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let idnumber = document.getElementById("id").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("confirm-password").value;
    let code = document.getElementById("code").value;

    let nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}$/;
    let lastnameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}){0,1}$/;
    let idnumberRegex = /^\d{6,10}$/;
    let ageRegex = /^(1[89]|[2-9][0-9]|100)$/;
    let phoneRegex = /^\d{10}$/;
    let emailRegex = /^\S+@\S+\.\S+$/;
    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let codeRegex = 0000;

    if (!nameRegex.test(name)) {
        alert("Ingresa un nombre válido.");
        return false;
    }

    if (!lastnameRegex.test(lastname)) {
        alert("Ingresa un apellido válido.");
        return false;
    }

    if (!idnumberRegex.test(idnumber)) {
        alert("Ingresa un número de identificación válido.");
        return false;
    }

    if (!ageRegex.test(age)) {
        alert("Ingresa una edad que afirme que eres mayor de edad.");
        return false;
    }


    if (!phoneRegex.test(phone)) {
        alert("Ingresa un número de teléfono válido.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Ingresa una dirección de e-mail válida.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Crea una contraseña que contenga: al menos 8 caractares, 1 Mayúscula, 1 Minúscula, 1 Número y No puede haber espacios en blanco.");
        return false;
    }

    if (cpassword != password) {
        alert("Las contraseñas ingresadas no coinciden.");
        return false;
    }

    if (code != codeRegex) {
        alert("El codigo selocambio es 0000.");
        return false;
    }

    signUpV();
    limpiarFormulario();
    return false;
}

function signUpV() {
    //alert("¡Has creado tu cuenta satisfactoriamente! vuelve a iniciar sesion.");
    //window.location.href='../../html/inicio/inicio.html';
}
function limpiarFormulario() { /*
    document.getElementById("email").value = ""
    document.getElementById("password").value = "" */
}