const $escolaGliderElement = document.querySelector('.escola-glider');

new Glider($escolaGliderElement, {
  slidesToScroll: 1,
  slidesToShow: 5,
  arrows: {
    prev: '.escola-glider-prev',
    next: '.escola-glider-next'
  },
  responsive: [
    {
      // screens greater than >= 1024px
      breakpoint: 975,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        // itemWidth: 150,
        // duration: 0.25
      }
    },
    {
      // screens greater than >= 775px
      breakpoint: 800,
      settings: {
        // Set to `auto` and provide item width to adjust to viewport
        slidesToScroll: 1,
      slidesToShow: 4,
        // itemWidth: 150,
        // duration: 0.25
      }
    },
    {
      // screens greater than >= 1024px
      breakpoint: 591,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // itemWidth: 150,
        // duration: 0.25
      }
    },
    {
      // screens greater than >= 1024px
      breakpoint: 471,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // itemWidth: 150,
        // duration: 0.25
      }
    },
    {
      // screens greater than >= 1024px
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        itemWidth: 260,
        // duration: 0.25
      }
    },
  ]
});

const $palcoGliderElement = document.querySelector('.palco-glider');

new Glider($palcoGliderElement, {
  slidesToScroll: 1,
  slidesToShow: 3,
  arrows: {
    prev: '.palco-glider-prev',
    next: '.palco-glider-next'
  },
  responsive: [
    {
      // screens greater than >= 1024px
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // itemWidth: 150,
        // duration: 0.25
      }
    },
    {
      // screens greater than >= 1024px
      breakpoint: 560,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        // itemWidth: 150,
        // duration: 0.25
      }
    },{
      // screens greater than >= 1024px
      breakpoint: 996,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        // itemWidth: 150,
        // duration: 0.25
      }
    }
  ]
});
