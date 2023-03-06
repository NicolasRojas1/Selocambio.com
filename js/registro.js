/**Por medio de AJAX cambio la pagina */
$(function() {
  $("#tarjetaRegistro").load("iniciar-sesion.html");
}); 

function abrirTarjetaLogin() {
  document.getElementById("iniciar-sesion").classList.add("inner");
  const pause = (time) => new Promise(resolve => setTimeout(resolve,time))
  async function start() {
    await pause(700)
    navegarALogin()
  }
  start()

}

function abrirTarjetaRegistro() {
  document.getElementById("tarjeta-registro").classList.add("inner");
  const pause = (time) => new Promise(resolve => setTimeout(resolve,time))
  async function start() {
    await pause(700)
    navegarARegistro()
  }
  start()
}

function navegarALogin() {

  $(function () {
    $("#tarjetaRegistro").load("registrarse.html");
  });
}

function navegarARegistro() {

  $(function () {
    $("#tarjetaRegistro").load("iniciar-sesion.html");
  })
}