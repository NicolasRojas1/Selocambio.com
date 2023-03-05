function validateForm() {
    var name = document.getElementById("send_user_name").value;
    var email = document.getElementById("send_user_mail").value;
    var phone = document.getElementById("send_user_phone").value;
    var message = document.getElementById("send_user_msg").value;

    var postname = document.getElementById("send_post_name").value;
    var postimg = document.getElementById("send_post_img").value;
    var postdesc = document.getElementById("send_post_desc").value;

    var nameRegex = /^[a-zA-Z ]{2,30}$/;
    var emailRegex = /^\S+@\S+\.\S+$/;
    var phoneRegex = /^\d{10}$/;

    if (!nameRegex.test(name)) {
        alert("Ingrese nombres y apellidos validos.");
        return false;
    }
    if (!emailRegex.test(email)) {
        alert("Ingrese una dirección de e-mail válida.");
        return false;
    }
    if (!phoneRegex.test(phone)) {
        alert("Ingrese un número de teléfono válido de 10 dígitos.");
        return false;
    }
    if (message == "") {
        alert("Ingrese un mensaje");
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