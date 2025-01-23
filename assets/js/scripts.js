const bar = document.querySelector('.bar');
const sidebar = document.querySelector('.sidebar');

if (bar) {
  // Toggle sidebar
  bar.addEventListener('click', () => {
    sidebar.classList.toggle('show');
  });

  // Close sidebar when clicking outside of it
  document.addEventListener('click', (event) => {
    if (!sidebar.contains(event.target) && !bar.contains(event.target)) {
      sidebar.classList.remove('show');
    }
  });
}

// library-category-slider
var mySwiper = new Swiper('.category-slider', {
  loop: true,
  speed: 500,
  autoplay: false,
  navigation: {
    nextEl: '.s-next',
    prevEl: '.s-prev',
  },
  spaceBetween: 10,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      spaceBetween: 10,
    },
    1024: {
      spaceBetween: 10,
    },
  },
});

// Grade-slider
var gradSlider = new Swiper('.grade-slider', {
  loop: true,
  speed: 500,
  autoplay: false,
  navigation: {
    nextEl: '.g-next',
    prevEl: '.g-prev',
  },
  spaceBetween: 10,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      spaceBetween: 10,
    },
    1024: {
      spaceBetween: 10,
    },
  },
});

// resourse-creator slider
var gradSlider = new Swiper('.resourse-creator__slider', {
  loop: true,
  speed: 500,
  autoplay: false,
  navigation: {
    nextEl: '.r-next',
    prevEl: '.r-prev',
  },
  spaceBetween: 10,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      spaceBetween: 10,
    },
    1024: {
      spaceBetween: 10,
    },
  },
});

