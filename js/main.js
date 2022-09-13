const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,

    autoplay: {
        delay: 5000,
    },
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 30
        }
      }
  });