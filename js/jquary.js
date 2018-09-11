
 
function myFunction(x) {
    x.classList.toggle("change");
}

var collapseBtn = document.querySelector('.dropdown_icon');

collapseBtn.addEventListener('click', function(){
      var nav = document.querySelector('nav');
      nav.classList.toggle('nav_anim_2');
});

 
 



$(document).ready(function(){
    $(window).scroll(function(){        
      var scroll = $(window).scrollTop();
        if (scroll > 150 &  $(window).width() > 730)  {
            $(".navbar").addClass("nav_anim");
            $(".nav-words").removeClass("text-white");
            
      }else{            
            $(".navbar").removeClass("nav_anim");
            $(".navbar").removeClass("nav_anim_2");
            $(".nav-words").addClass("text-white");
      }    
});

});
 


  




function form_anim(y) { 
      y.classList.add("animated_form");
}









 