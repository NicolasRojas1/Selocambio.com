
function validateFormS() {
    var name = document.getElementById("fname").value;
    var lastname = document.getElementById("lname").value;
    var idnumber = document.getElementById("id").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("confirm-password").value;


    var nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}$/;
    var lastnameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}(?: [a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,}){0,1}$/;
    var idnumberRegex = /^\d{6,10}$/;
    var ageRegex = /^(1[89]|[2-9][0-9]|100)$/;
    var phoneRegex = /^\d{10}$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


    if (!nameRegex.test(name)) {
        alert("Ingrese un nombre válido.");
        return false;
    }

    if (!lastnameRegex.test(lastname)) {
        alert("Ingrese un apellido válido.");
        return false;
    }

    if (!idnumberRegex.test(idnumber)) {
        alert("Ingrese un número de identificación válido.");
        return false;
    }

    if (!ageRegex.test(age)) {
        alert("Ingresa una edad que afirme que eres mayor de edad.");
        return false;
    }


    if (!phoneRegex.test(phone)) {
        alert("Ingrese un número de teléfono válido.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Ingrese una dirección de e-mail válida.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Crea una contraseña que contenga: al menos 8 caractares, 1 Mayúscula, 1 Minúscula, 1 Número y No puede haber espacios en blanco.");
        return false;
    }

    if (!passwordRegex.test(cpassword)) {
        alert("Las contraseñas ingresadas no coinciden.");
        return false;
    }

    signUp();
    limpiarFormulario();
    return false;
}

function signUp() {
    console.log("Cuenta creada!");
    alert("Has creado tu cuenta satisfactoriamente, te vamos a direccionar a nuestra pagina de inicio.")
    window.location.href='../../dev/publicar-nicolas/publicaciones-n.html';
}
function limpiarFormulario() {
    document.getElementById("email").value = ""
    document.getElementById("password").value = ""
}