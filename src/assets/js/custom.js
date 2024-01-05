// Sidebar start
$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('nav').toggleClass('active');

  })
})

$(document).ready(function () {
  $('.menu-toggle').click(function () {
    $('.menu-toggle').toggleClass('active');
    $('body').toggleClass('body_overlay');
  });
});
// Sidebar end

// Sticky Header start

// window.onscroll = function () { myFunction() };

// var header = document.getElementById("myHeader");
// var sticky = header.offsetTop;

// function myFunction() {
//   if (window.pageYOffset > sticky) {
//     header.classList.add("sticky_header");
//   } else {
//     header.classList.remove("sticky_header");
//   }
// }
// Sticky Header end



// for Accordion start

$(document).ready(function () {
  $('.questionItem > .qitemDetails  > .panel').hide();

  $('.questionItem > .qitemDetails').click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".panel").slideUp();
    } else {
      $(".questionItem > .qitemDetails.active .panel").slideUp();
      $(".questionItem > .qitemDetails.active").removeClass("active");
      $(this).addClass("active").find(".panel").slideDown();
    }
    return false;
  });
});

// for Accordion end

// Testimonial owlCarousel start

$('.owl-carousel.test_slider').owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  dots: true,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2
    },
    1000: {
      items: 2
    }
  }
})

// Testimonial owlCarousel end

// Testimonial owlCarousel start

$('.owl-carousel.partner_slider').owlCarousel({
  loop: true,
  margin: 45,
  nav: true,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    800: {
      items: 4
    },
    1200: {
      items: 6
    }
  }

})
// $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
//  $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
// Testimonial owlCarousel end


// channel owlCarousel start
$('.owl-carousel.Channel_Slider').owlCarousel({
  loop: true,
  margin: 45,
  nav: true,
  dots: true,
  navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1,
      margin: 5,
    },
    575: {
      items: 2
    },
    767: {
      items: 2
    },
    991: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
})
// channel owlCarousel end

// Scroll to Top
$(document).ready(function () {
  "use strict";
  var offSetTop = 100;
  var $scrollToTopButton = $('.scrollToTop');
  //Check to see if the window is top if not then display button
  $(window).scroll(function () {
    if ($(this).scrollTop() > offSetTop) {
      $scrollToTopButton.fadeIn();
    } else {
      $scrollToTopButton.fadeOut();
    }
  });
  //Click event to scroll to top
  $scrollToTopButton.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 300);
    return false;
  });
});


$(document).ready(function () {
  $(".read-more").click(function () {
    $(".article-para").toggleClass("main");
  });
});


$(document).ready(function () {
  $(".nav-link ").click(function () {
    $(".dropdownMenu").toggleClass("dropdownMenu_block");
  });
});


