$(window).scroll(function(){
  if ($(this).scrollTop() > 50) {
     $('#header').addClass('scroll');
     $('#logo').attr("src", "./assets/img/home/logo-via-musical-black.png");
  } else {
     $('#header').removeClass('scroll');
     $('#logo').attr("src", "./assets/img/home/logo-via-musical.png");
  }
});

