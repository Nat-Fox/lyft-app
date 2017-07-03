$(document).ready(function() {

    function formatState(state) {
        if (!state.id) { return state.text; }
        var $state = $(
            '<span class="center-content"><img src="assets/svg-flags/' + state.element.value + '.svg" class="img-flag"/>' + state.element.text + '</span>'
        );
        return $state;
    };


    function selectedFormat(state) {
        if (!state.id) { return state.text; }
        var $state = $(
            // '<span><img src="assets/img/au.svg" class="img-flag" /> ' + state.text + '</span>'
            '<span class="center-content"><img src="assets/svg-flags/' + state.element.value + '.svg" class="img-flag"/></span>'
        );
        return $state;
    };

    var select = $('.js-example-basic-single');
    select.select2({
        templateResult: formatState,
        templateSelection: selectedFormat,
        minimumResultsForSearch: -1,
        data: flagsCountries
    });

    select.on('select2:open', function() {
        var wrapper = $('#selector-wrapper');

        wrapper.removeClass('s3');
        wrapper.addClass('s12');
    });

    select.on('select2:select', function(selected) {
        console.log(selected.params.data.id);
        flagsCountries.forEach(function(country) {
            if (selected.params.data.id == country.id) {
                console.log(country.code);
                $('#input-code').val(country.code);
            }
        })
    });

    select.on('select2:close', function() {
        var wrapper = $('#selector-wrapper');

        wrapper.addClass('s3');
        wrapper.removeClass('s12');
    });


    console.log(window.LibPhoneNumber);

    $('#input-number').on('keyup', function(event) {

        // val del id
        console.log('selectid', select.val());

        // crea una instancia de libphonenumber
        var phoneUtil = window.LibPhoneNumber.PhoneNumberUtil.getInstance();
        // numero, id


        console.log('input value -> ', $(this).val());
        console.log('country code -> ', select.val());

        // Activar el boton si el formato es valido
        try {
            var parsedNumber = phoneUtil.parse($(this).val(), select.val());
            // console.log(phoneUtil.isValidNumber('validation', parsedNumber))

            // revisamos si un numero es valido o no
            if (phoneUtil.isValidNumber(parsedNumber)) {
                $('#btn-next').removeClass('disabled');
                $('#error').addClass('ocultar');
            } else {
                $('#error').removeClass('ocultar');
            }

        } catch (error) {
            console.log('error', error);
            $('#btn-next').addClass('disabled');
            $('#error').removeClass('ocultar');
        }

    });

    // Almacenar los numeros en local storage una vez que apretamos next
    $('#btn-next').on('click', function(event) {
        var numberPhone = $('#input-number').val();
        var codeCountry = $('#input-code').val();

        console.log(numberPhone);
        localStorage.number = numberPhone;
        localStorage.code = codeCountry;
        console.log('local', codeCountry + localStorage.number);
    });


    // Codigo desde rama phoneFran para generar y pedir codigo aleatorio

    $('#btn-next').on('click', function() {
        var randNum = ("LAB-" + (Math.floor(Math.random() * 899 + 100))); //numero aleatorio de 3 cifras no considera padding de ceros si <100, por eso va entre 100-999
        alert("Tu código es (lo deberás ingresar en el siguiente paso)" + "\n" + randNum);

        localStorage.aleatorio = randNum; //lS se guarda ok

    });


    //al hacer click, verificar que el cod ingresado sea correcto
    $("#btn-next-code").click(function() {
        var code = $("#codUsuario").val();
        if (code.toUpperCase() == localStorage.aleatorio) { //codUsuario sera el valor q ingresa el user en el form
            alert("Código correcto.");
            // Si esta correcto lo limpiamos
            $("#codUsuario").val('');
            //debe aparecer un alert que diga q está mal el cód (ok)
        } else {
            alert("Código incorrecto, ingresar nuevamente.")
        }
    });


});