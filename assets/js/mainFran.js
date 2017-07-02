$(document).ready(function() {
    var randNum = ("LAB-" + (Math.floor(Math.random() * 899 + 100)));
    alert("Tu código es (lo deberás ingresar en el siguiente paso)" + "\n" + randNum);

    localStorage["randNum"] = $("#randNum").text();



});