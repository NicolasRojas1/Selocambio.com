
function ventana() {

  /*confirm("¿Esta seguro que quiere cerrar sesion?");*/

    var mensaje;
    var opcion = confirm("Clicka en Aceptar o Cancelar");
    if (opcion == true) {
        mensaje = "Has clickado OK";
	} else {
	    mensaje = "Has clickado Cancelar";
	}
	window.location.href='../../dev/publicar-nicolas/publicaciones-a.html';
}




