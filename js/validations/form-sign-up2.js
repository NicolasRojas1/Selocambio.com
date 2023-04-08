
function validateFormS() {
    const name = document.getElementById("fname").value;
    const lastname = document.getElementById("lname").value;
    const idnumber = document.getElementById("id").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const cpassword = document.getElementById("confirm-password").value;
    const codeInput = document.getElementById("code").value;

    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}$/;
    const lastnameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}){0,1}$/;
    const idnumberRegex = /^\d{6,10}$/;
    const ageRegex = /^(1[89]|[2-9][0-9]|100)$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const code = "ahimiramos23"

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

    if (codeInput != code) {
        alert("No puedes registrarte si no tienes el codigo de acceso de Selocambio.");
        return false;
    }

    signUpV();
    limpiarFormulario();
}

function signUpV() {
    //alert("¡Has creado tu cuenta satisfactoriamente! vuelve a iniciar sesion.");
    //window.location.href='../../html/inicio/inicio.html';
}
function limpiarFormulario() { /*
    document.getElementById("email").value = ""
    document.getElementById("password").value = "" */
}