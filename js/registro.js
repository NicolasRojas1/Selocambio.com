/**Por medio de AJAX cambio la pagina */
$(function() {
  $("#tarjetaRegistro").load("registrarse.html");
}); 

function abrirTarjetaLogin() {
  document.getElementById("tarjeta-registro").classList.add("inner");
  const pause = (time) => new Promise(resolve => setTimeout(resolve,time))
  async function start() {
    await pause(700)
    navegarALogin()
  }
  start()

}

function navegarALogin() {

  $(function () {
    $("#tarjetaRegistro").load("iniciar-sesion.html");
  });
}