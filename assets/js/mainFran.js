$(document).ready(function() {
    // var randNum = ("LAB-" + (Math.floor(Math.random() * 899 + 100))); //numero aleatorio de 3 cifras no considera padding de ceros si <100, por eso va entre 100-999
    // alert("Tu código es (lo deberás ingresar en el siguiente paso)" + "\n" + randNum);

    // localStorage.aleatorio = randNum; //lS se guarda ok



    //al hacer click, verificar que el cod ingresado sea correcto
    $("#btn-next-code").click(function() {
        var code = $("#codUsuario").val();
        if (code.toUpperCase() == localStorage.aleatorio) { //codUsuario sera el valor q ingresa el user en el form
            alert("Código correcto.");
            //debe aparecer un alert que diga q está mal el cód (ok)
        } else {
            alert("Código incorrecto, ingresar nuevamente.")
        }
    });

});