$(".infomas").click(function(){
		
   var contenido=$(this).next(".infomas");
			
   if(contenido.css("display")=="none"){		
      contenido.slideDown(250);			
      $(this).addClass("open");
   }
   else{
      contenido.slideUp(250);
      $(this).removeClass("open");	
  }
							
});