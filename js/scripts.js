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

$(".header__contacts-burger").click(() => {
  $(".header__contacts").slideToggle();
});

$(".present__order-btn").click(() => {
  $(".page__overlay--modal").fadeIn(700).css("display", "flex");
});

$(".modal__close").click(() => {
  $(".page__overlay--modal").fadeOut(700);
});
