$(document).ready(function() {


    var randNum = (Math.floor(Math.random() * 899 + 100));
    localStorage["randNum"] = $("#botonRN");
    //$("#randNum").text(Math.floor(Math.random() * 899 + 100));



    $("#botonRN").click(function() {
        var randNum = (Math.floor(Math.random() * 899 + 100));
        alert("Tu código es (lo deberás ingresar en el siguiente paso)" + "\n" + "LAB-" + randNum);
    });



    function confirmarDatos() { //quiero validad q lo que ingresa el usuario es igual al cod random

        var code = $("#codUsuario").val();

        if ($("#codUsuario").val() == ("LAB-" + (localStorage["randNum"]))) { //codUsuario sera el valor q ingresa el user en el form
            alert("Código correcto.");
            //debe aparecer un alert que diga q está mal el cód
        } else {
            alert("Código incorrecto, ingresar nuevamente.")
        }
    }

});

//no he declarado el #randNum en el html bien

//hay que verificar con localStorage que sean los datos que se solicitan. 
//vi que el localStorage lo ponen fuera del document ready <-------ojo no se si es correcto