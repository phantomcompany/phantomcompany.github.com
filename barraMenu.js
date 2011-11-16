	function menubar(){  //menu se despliegue lentamente
	$(" #lista ul ").css({display: "none"}); // Opera Fix
	$(" #lista li").hover(function(){
			$(this).find('ul:first').css({visibility: "visible",display: "none"}).show(500);
			},function(){
			$(this).find('ul:first').css({visibility: "hidden"});
			});
	}
	 $(document).ready(function(){					
	menubar();	
	

});