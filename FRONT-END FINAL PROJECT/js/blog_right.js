$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
  //   autoplay:2000,
    responsive:{
      0: {
          items: 1,
      },
      1140: {
          items: 3,
      },
      1110: {
          items: 3,
      }
    }
  })