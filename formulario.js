$(document).ready(function(){	
	
		$('.alerta').hide();
		
	
});
function validarCampo()
	{
        if ($('.nombre').val() == "" || $('.apellidos').val() == "" || $('.email').val() == "") {
         $('.alerta').show();		
        
		}
	}