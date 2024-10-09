const navbarToggler = document.querySelector('.navbar-toggler');
const navbarHamburger = document.querySelector('#navbar-hamburger');
const navbarClose = document.querySelector('#navbar-close');

navbarToggler.addEventListener('click', () => {
  navbarHamburger.classList.toggle('d-none');
  navbarClose.classList.toggle('d-block');
});


var multipleCardCarousel = document.querySelector(
  "#carouselExampleControls"
);
if (window.matchMedia("(min-width: 768px)").matches) {
  var carousel = new bootstrap.Carousel(multipleCardCarousel, {
    interval: false,
  });
  var carouselWidth = $(".carousel-inner")[0].scrollWidth;
  var cardWidth = $(".carousel-item").width();
  var scrollPosition = 0;
  $("#carouselExampleControls .carousel-control-next").on("click", function () {
    if (scrollPosition < carouselWidth - cardWidth * 4) {
      scrollPosition += cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
  $("#carouselExampleControls .carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
      scrollPosition -= cardWidth;
      $("#carouselExampleControls .carousel-inner").animate(
        { scrollLeft: scrollPosition },
        600
      );
    }
  });
} else {
  $(multipleCardCarousel).addClass("slide");
}

// Initialize the carousels
document.addEventListener("DOMContentLoaded", function () {
  var carousels = document.querySelectorAll('.carousel');
  carousels.forEach(function (carousel) {
    var id = carousel.id;
    var carouselInstance = new bootstrap.Carousel(document.getElementById(id), {
      interval: 2000,
      wrap: true,
      keyboard: true
    });
  });
});