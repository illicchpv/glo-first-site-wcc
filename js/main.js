window.addEventListener('wcc:all-components-ready', () => {
  console.log('wcc:all-components-ready');

  // new WOW().init();

  const swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.projects-pagination',
      type: 'bullets',
      bulletClass: 'projects-bullet',
      bulletActiveClass: 'projects-bullet-active',
      clickable: true,
    },
    // loop: true, // включаем бесконечный цикл
    // autoplay: {
    //   delay: 3000, // Delay between transitions (in ms)
    //   disableOnInteraction: false, // Continue autoplay after user interaction
    // },
  });
});

