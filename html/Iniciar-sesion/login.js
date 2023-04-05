function singUp(event) {
  event.preventDefault();
  //console.log("working");

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value; 

  let user = {
    email: email,
    password: password,
  };

  let json = JSON.stringify(user);

  localStorage.setItem(email, json);
  localStorage.setItem(password, json);

  console.log("Cuenta creada!");
  alert("¡Has creado tu cuenta satisfactoriamente! vuelve a iniciar sesion.");
  window.location.href='../../html/inicio/inicio.html';
}

function loginFunc(event) {
  event.preventDefault();
  //console.log(123);

  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value; 
  let result = document.getElementById('result');

  let user = localStorage.getItem(email);
  let data = JSON.parse(user);
  console.log(data);

  if(user == null) {
    result.innerHTML = "Usuario incorrecto";
  } else if(email == data.email && password == data.password){
    result.innerHTML = "Bienvenido";
  } else {
    result.innerHTML = "Usuario o clave incorrectas";
  }

}