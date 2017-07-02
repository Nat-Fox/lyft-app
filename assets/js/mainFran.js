$(document).ready(function() {
    $('#number').text(Math.floor(Math.random() * 899 + 100));
});
//funcion para rellenar con 0s cuando aleatorio sea <=99
/* function pad(str, max) {
     str = num.toString();
     return str.length < max ? pad("0" + str, max) : str;
 }*/


//hacer un if numero random menor de 3 digitos entonces va un 0 al inicio