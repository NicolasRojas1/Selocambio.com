function validateForm() {
    const emails = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const codeInput = document.getElementById("code").value;
    const emailRegex = /^\S+@\S+\.\S+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const code = "ahimiramos23"

    if (!emailRegex.test(emails)) {
        alert("Ingrese una dirección de e-mail válida.");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Ingresa una contraseña que contenga por lo menos: \n8 caractares\n1 Mayúscula\n1 Minúscula\n1 Número\nEjemplo: Enero2023");
        return false;
    }
    if (codeInput != code) {
        alert("No puedes iniciar sesion si no tienes el codigo de acceso de Selocambio.");
        return false;
    }

}