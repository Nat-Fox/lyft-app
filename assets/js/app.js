$(document).ready(function() {

    $('.submit-btn').click(function(e) {
        e.preventDefault();
        // Eliminar span de validaciones anteriores
        $(".form-control").each(function() {
            $('span').remove();
        });
        //name validation, empty field and first character uppercase
        function nombre() {
            var nombre = $('#first-name').val();
            if (nombre === null || nombre.length === 0) {
                $('.name-container').append('<span><i class="material-icons error">clear</i></span>');
                return false;
            } else if (nombre.substring(0, 1) !== nombre.substring(0, 1).toUpperCase()) {
                $('.name-container').append('<span><i class="material-icons error">clear</i></span>');
                return false;
            } else if (/[0-9]/.test(nombre)) {
                $('.name-container').append('<span><i class="material-icons error">clear</i></span>');
                return false;
            } else {
                localStorage.nombre = nombre;
                return true;
            }
        };
        nombre();

        function apellido() {
            var apellido = $('#last-name').val();
            if (apellido === null || apellido.length === 0) {
                $('.lastname-container').append('<span><i class="material-icons error">clear</i></span>');
                return false;
            } else if (apellido.substring(0, 1) !== apellido.substring(0, 1).toUpperCase()) {
                $('.lastname-container').append('<span><i class="material-icons error">clear</i></span>');
                return false;
            } else if (/[0-9]/.test(apellido)) {
                $('.lastname-container').append('<span><i class="material-icons error">clear</i></span>');
                return false;
            } else {
                localStorage.apellido = apellido;
                return true;
            }
        };
        apellido();

        function correo() {
            var correo = $('#email').val();
            var verificar = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
            if (correo === null || correo.length === 0) {
                $('.email-container').append('<span><i class="material-icons error">clear</i></span>');
            } else if (verificar.test(correo)) {
                localStorage.correo = correo;
                return true;
            } else {
                $('.email-container').append('<span><i class="material-icons error">clear</i></span>');
                return false;
            }
        };
        correo();

        function testcheck() {
            if (!jQuery("#filled-in-box").is(":checked")) {
                alert("Debes aceptar los terminos y condiciones para continuar");
                return false;
            } else {
                return true;
            }
        };
        testcheck();

        ///// VACIAR CAMPOS
        $('#first-name').val("");
        $('#last-name').val("");
        $('#email').val("");
    });

});