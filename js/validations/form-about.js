function validateForm() 
{
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;
    let nameRegex = /^[a-zA-Z ]{2,30}$/;
    let emailRegex = /^\S+@\S+\.\S+$/;
    let phoneRegex = /^\d{10}$/;
    let messageRegex = /^.{1,50}$/;

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
}

function sendEmail() {
    console.log("Correo electronico enviado!");
}