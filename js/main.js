/*
- Todos los campos son obligatorios, excepto los dos últimos.
- Los campos nombre y apellido sólo deben permitir caracteres de la A-Z
- Para los campos nombre y apellido la primera letra debe ser mayúscula
- Validar que el campo email tenga un formato válido. Ej: name@domain.com
- El campo password debe tener al menos 6 caracteres
- El campo password no puede ser igual a "password" ó "123456" ó "098754"
- El valor seleccionado de bicis, debe ser una de las opciones presentadas */


function validateForm(){
	
	var nombre = $("#name").val(); /*document.getElementById("name").value; */
	var apellido = $("#lastiname").val();/*document.getElementById('lastname').value;*/
	var email = $("#input-email").val(); /*document.getElementById('input-email').value;*/
	var contrasena = $("#input-password").val(); /*document.getElementById('input-password').value;*/
	// tuve que agregarle un Id al select porque no supe como hacerlo...
	var selectCletas = $("#select-bici").val();/*document.getElementsByTagName('select')[0].selectedIndex;*/


//Esta función la saqué del bicis locas 3 que hizo el mati para ver si me funcionaba
 function limpiarSpans(clase) {
	var div = document.getElementsByClassName(clase)[0];
	var hijos_spans = div.getElementsByTagName('span');
	for (var i=0 ; i<hijos_spans.length ; ++i) {
		div.removeChild(hijos_spans[i]);
	}
}
//Validación nombre
	function validarNombre(){
		limpiarSpans('name-container');
		//campo obligatorio
		if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {

			$(".name-container").append("<span> Este campo es obligatorio</span>");  
			return false;
		}
		//sólo letras
		if (/[0-9]/.test(nombre)) {
      	  $(".name-container").append("<span>Ingrese solo letras en nombre</span>");
     	  return false;
   		}
   		//primera letra mayúscula
		if (nombre.charAt(0) != nombre.charAt(0).toUpperCase()) {
			$(".name-container").append("<span>La primera letra del nombre tiene que ser mayúscula</span>");
		}
	}
	validarNombre();
 
//Validación Apellido
	function validarApellido(){
		limpiarSpans('lastname-container');
		//campo obligatorio
		if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
			$('.lastname-container').append("<span> Este campo es obligatorio</span>");
			//alert("Este campo es obligatorio");  
			return false;

		}
		//sólo letras
		if (/[0-9]/.test(apellido)) {
			$('.lastname-container').append("<span> Ingrese sólo letras en apellido</span>");
       		 //alert("Ingrese solo letras en apellido");
        	return false;
   		}
   		//primera letra mayúscula
		if (apellido.charAt(0) != apellido.charAt(0).toUpperCase()) {
			$('.lastname-container').append("<span> La primera letra del apellido bede ser mayúscula</span>");
			//alert("La primera letra del apellido tiene que ser mayúscula");
		}
   	}
	 validarApellido();

//Validación Email
	function validarEmail(){
		limpiarSpans('email-container');

		if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email))) {
       		$('.email-container').append("<span> Por favor, ingresa un e-mail válido</span>");
       		// alert("Por favor ingresa un Email válido");
        return false;
    	}
	} 
	validarEmail();

//Validación Contraseña
	function validarContrasena(){
		limpiarSpans('password-container');
		if (contrasena.length<6 || contrasena =="password" || contrasena == 123456 || contrasena == 098754) {
       		$('.password-container').append("<span> Por favor, ingresa una contraseña válida</span>");
       		// alert("Ingrese una contraseña válida");
        return false;
   		}
   	}
	validarContrasena();

	
//validarBicis();

	function validarBicis(){
		limpiarSpans('select-container');

    	if ($("#select-bici") == 0 || $("#select-bici") == null) {
         $('.select-container').append("<span>Elige una opción  de bicicleta válida</span>");
        return false;
   		}
	}
	validarBicis();


}



















