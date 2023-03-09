function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;
    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var phoneRegex = /^\d{10}$/;
    var messageRegex = /^.{1,50}$/;

    if (!nameRegex.test(name)) {
        alert("Ingrese nombres y apellidos validos.");
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert("Ingrese un número de teléfono válido de 10 dígitos.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Ingrese una dirección de e-mail válida.");
        return false;
    }
    if (message=="") {
        alert("Ingrese un mensaje mayor a 50 caracteres");
        return false;
    }
    sendEmail();
    limpiarFormulario();
    return false;
}

function sendEmail() {
    console.log("Correo electronico enviado!");
}
function limpiarFormulario() {
    document.getElementById("name").value = ""
}