$(document).ready(function() {

  $("#text-footer").find("p").css("color", "grey").css("font-size", "17px").css("font-weight", "normal");

  $("#home").find(".text-home").css("padding-top", "10%");

  $("#information").find("i").hover(
    function() {
      $(this).addClass("animated shake");
    },
    function() {
      $(this).removeClass("animated shake");
    }
  );
     $(".navbar").find("button").click(
    function() {
      if ($(this).hasClass("collapsed")){
       $(this).removeClass("collapsed");
      }
      else{
      $(this).addClass("collapsed");
      }
    },
    function() {
      if ($("#bs-navbar-collapse").hasClass("in")){
      $("#bs-navbar-collapse").removeClass("in");
    }
    else{
     $("#bs-navbar-collapse").addClass("in")
    }
   }
  );

  $('.collapse li a').click(function() {
       if ($('#bs-navbar-collapse').hasClass('in')) {
           $('#bs-navbar-collapse').removeClass('in');
           $('#bs-navbar-collapse').removeClass('in');
       }
   });

  /* Smooth Scroll*/
  $('a[href^="#"]:not([data-toggle="collapse"])').click(function() {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top - 50
    }, 1000);
    return false;
  });

});
