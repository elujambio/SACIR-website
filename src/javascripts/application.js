$(".down-arrow")
	.velocity(
		{ rotateZ: "-45deg" },
		{ duration: 0 }	
	)
	.velocity(
		{ translateY: "18px", translateX: "-18px", opacity: 0 },
		{ duration:5000, easing: "ease", loop: true }
	);		
var logoSizeFired = false;
$(document).scroll(
  function(){
    if ($(document).scrollTop() > 320) {
        if( logoSizeFired == false )
        {
          $("#logo")
            .velocity(
              { height: "36px" },
              { duration: 250 } 
            );      
            logoSizeFired = true;
        }
    }
    else
    {
      if(logoSizeFired == true)
      {
        $("#logo")
          .velocity("reverse");
        logoSizeFired = false;
      } 
    }
  }
);
// $("#price img")
//   .velocity(
//     { rotateZ: "180deg" },
//     { duration: 0 }
//   )
// 	.velocity(
//     { translateX: "18px", opacity: 0 },
// 		{ duration: 1500, delay: 500, easing: "ease", loop: true }
// 	);
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});