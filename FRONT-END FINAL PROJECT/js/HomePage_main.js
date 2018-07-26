// $('#home').hover(function(){
//     $('#homechild').toggle();
// })
// $('#menu').hover(function(){
//     $('#menuchild').slideToggle('slow');
// });
// $('#chefs').hover(function(){
//     $('#chefschild').toggle();
// })
// $('#reservation').hover(function(){
//     $('#reservationchild').toggle();
// })
// $('#pages').hover(function(){
//     $('#pageschild').toggle();
// })
// $('#blog').hover(function(){
//     $('#blogchild').toggle();
// })


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



