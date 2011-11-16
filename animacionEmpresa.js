var contador=1;
		function CambiarFondo()
		{
		if(contador !=4)
		{
			var valor= "estilo/Empresa"+contador+".jpg"
			var src_img_div='url(\''+valor+'\')';
				$("#animacionEmpresa").css('background-image',src_img_div);
				$("#animacionEmpresa img").fadeOut('slow',function()
				{
					$("#animacionEmpresa img").attr('src',valor);
				});
				$("#animacionEmpresa img").fadeIn('slow');
				$("#animacionEmpresa img").css('display','block');
				setTimeout("CambiarFondo()",4000);
				contador +=1;	
		}
		else
		{
			contador=1;
			setTimeout("CambiarFondo()",1000);
		}
		}
	$(document).ready(function(){
	CambiarFondo();
	});