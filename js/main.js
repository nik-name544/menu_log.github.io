$(function () {

  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: '<img class="slider-arrows__left" src="img/next-arow.svg" alt=""></img>',
    prevArrow: '<img class="slider-arrows__right" src="img/prev-arow.svg" alt=""></img>',
    fade: true,
    asNavFor: '.slider__nav',
    // dots: '.slider__img',
  });

  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    // dots: false,
    arrows: false,
    centerMode: false,
    // focusOnSelect: true,
    dots: true,
    // centerMode: true,
    focusOnSelect: true,
        responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
        }
      },

    ]
  });

  $('.header__menu-btn').on('click', function () {
    $('.header__menu').slideToggle();
  });

});