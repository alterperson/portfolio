new Swiper(".swiper", {
  // Navigation arrows
  navigation: {
    nextEl: ".portfolio__arrow--right",
    prevEl: ".portfolio__arrow--left",
    disabledClass: "portfolio__arrow--disabled",
  },
  breakpoints: {
    480: {
      grid: {
        fill: "row",
        rows: 2,
      },
    },
    768: {
      grid: {
        fill: "row",
        rows: 2,
      },
      slidesPerView: 2,
    },
  },
});
