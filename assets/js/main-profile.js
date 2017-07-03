  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  //$('.collapsible').collapsible();

  /*al seleccionar la nueva imagen atravez de jquery 
  debe eleminar la anterior y hacer que exista la nueva*/

  $(document).ready(function() {
      $('#btn-edit').click(function(event) {
          event.preventDefault();
          $('#modal1').modal();

          var imagenSubida = $('#img-subida').val();

          $('#img-cambiada').click(function(event) {
              localStorage = imagenSubida;
          });

          /*$('#modal1').click(function(e){
  			console.log('inicio');
  			var uno = $('#cambio-dos').val();
  			var dos = $('#cambio-tres').val();
  			var tres = $('#cambio-cuatro').val();

  			$('#cambio-dos').addClass('img-dos');
  			$('#cambio-dos').removeClass('img-usuario');
  			
  			if(uno){
  				
  				console.log('dos');
  			}
	    	if(dos){
	    		$("#cambio-tres").addClass('img-tres');
	    		console.log('tres');
	    	}
	    	if(tres){
	    		$("#cambio-cuatro").addClass('img-cuatro');
	    		console.log('cuatro');
	    	}*/
      });
  });