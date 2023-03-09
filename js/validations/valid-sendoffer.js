function validateForm() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var postname = document.getElementById("postname").value;
    var postdescrip = document.getElementById("postdescrip").value;

    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var phoneRegex = /^.{1,50}$/;

    var postnameRegex = /^[a-zA-Z ]{2,30}$/;
    var postdescriptRegex = /^.{25}$/;

    if (!postnameRegex.test(postname)) {
        alert("Ingrese un titulo de oferta valida");
        return false;
    }
    if (postdescrip=="") {
        alert("Ingrese una descripcion de oferta valida mayor a 50 caracteres");
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert("Ingrese un número de teléfono válido de 10 dígitos.");
        return false;
    }
    if (!nameRegex.test(name)) {
        alert("Ingrese nombres y apellidos validos.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Ingrese una dirección de e-mail válida.");
        return false;
    }

    sendEmail();
    limpiarFormulario();
    return false;
}

function sendEmail() {
    console.log("Correo electronico enviado!")
}
function limpiarFormulario() {
    document.getElementById("name").value = ""
}