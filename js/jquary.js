
 
function myFunction(x) {
    x.classList.toggle("change");
}


 
 



$(document).ready(function(){
    $(window).scroll(function(){        
      var scroll = $(window).scrollTop();
        if (scroll > 150 &  $(window).width() > 730)  {
            $(".navbar").addClass("nav_anim");
            $(".nav-words").removeClass("text-white");
            
      }else{            
            $(".navbar").removeClass("nav_anim");
            $(".nav-words").addClass("text-white");
      }    
});

});
 


  




function form_anim(y) { 
      y.classList.add("animated_form");
}









 