//validacion formulario
$(document).ready(function() {
	var validacion = function(){
		var nombre = $(/*input nombre*/).val();
		if(nombre =! /^[a-zA-Z ]+$/ || nombre = ""){
			alert("Debes escribir un nombre valido")
		}
		else{
			alert("usuario correcto");
		};
	}
	
});


/*.validator.addMethod("alpha", function(value, element) {
    return this.optional(element) || value == value.match(/^[a-zA-Z ]*$/);
 });

 crea un metodo nuevo con las condiciones*/