
  

  
/*  $(document).ready(function() {
  $('.menu-toggle').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).closest('.main-nav').find(nav).slideToggle();
  });
});*/

  
/*  
  $(document).ready(function() {
    $( '.menu-toggle' ).click(
        function(){
            $(this).children('.show-nav').slideDown(200);
        },
        function(){
            $(this).children('.show-nav').slideUp(200);
        }
    );
});*/
  
$(document).ready(function () {
    
  $(window).scroll(function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    if ($(this).scrollTop()>10)
     {
        $('.main-nav ul').hide();
        $('.main-nav').addClass('fixed');
        $('.main-logo').addClass('fixed');
       $('header').addClass('fixed');
     }
    else
     {
      $('.main-nav ul').show();
      $('.main-nav').removeClass('fixed');
      $('.main-logo').removeClass('fixed');
       $('header').removeClass('fixed');
     }
 });
  
  
  
  
    var showMenu = function (event) {
        event.preventDefault();
        event.stopPropagation();
//        e.preventDefault();
        $(this).closest("nav").find("ul.show-nav").slideToggle("slow"); };
    var hideMenu = function () {
//        event.stopPropagation();
//        event.preventDefault();
        $(this).closest("nav").find("ul.show-nav").slideToggle("slow");        
    };

   // jQuery methods go here...
    $(".main-nav").on("click", ".menu-toggle", showMenu);
    
    
//    $(".main-nav").on("click", ".menu-toggle", hideMenu);    
//    $(".contactForm").on("focusin", "textarea", showError);
//    $(".contactForm").on("focusout", "textarea", hideError);


});



/*
$(document).ready(function () {
    
    var showError = function () {
        $(this).closest("div").find(".error").animate({left: "15px", opacity: "1"}, "fast"); };
    var hideError = function () {
        $(this).closest("div").find(".error").animate({right: "15px", opacity: "0"}, "fast");        
    };
   // jQuery methods go here...
    $(".contactForm").on("focusin", "input", showError);
    $(".contactForm").on("focusout", "input", hideError);    
    $(".contactForm").on("focusin", "textarea", showError);
    $(".contactForm").on("focusout", "textarea", hideError);


});
*/




  
/*  $(document).ready(function () {
// hover property will help us set the events for mouse enter and mouse leave
$('.menu-toggle').click(
// When mouse enters the .navigation element
function () {
//Fade in the navigation submenu
$('ul', this).fadeIn(); // fadeIn will show the sub cat menu
},
// When mouse leaves the .navigation element
function () {
//Fade out the navigation submenu
$('ul', this).fadeOut(); // fadeOut will hide the sub cat menu
}
);
});*/
  
  
  
/*  
  <script>
$( ".menu-toggle" ).click(function () {
  if ( $( ".main-nav" ).is( ":hidden" ) ) {
    $( ".main-nav" ).slideDown( "slow" );
  } else {
    $( ".main-nav" ).hide();
  }
});
</script>*/





