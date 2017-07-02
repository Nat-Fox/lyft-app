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
                $('#input-text').val(country.code);
            }
        })
    });

    select.on('select2:close', function() {
        var wrapper = $('#selector-wrapper');

        wrapper.addClass('s3');
        wrapper.removeClass('s12');
    });
});