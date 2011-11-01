
	function animationImage(){
		
        $("div.productos a img").hover(function() {
            // hover in
       
            $(this).animate({height: "200",width: "300"}, "slow");
        }, function() {
            // hover out
        
            $(this).animate({height: "100",width: "150"}, "fast");
        });
     

			
	}
		
	
	 
 $(document).ready(function(){				

		animationImage();

});