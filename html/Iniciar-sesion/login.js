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
  console.log('user added');
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