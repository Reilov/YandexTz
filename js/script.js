// const slides = document.querySelectorAll('.member__slide-wrap'),
//           nextSlide = document.querySelector('.member__slider-next'),
//           prevSlide = document.querySelector('.member__slider-prev'),
//           current = document.querySelector('.member__slider-slide'),
//           total = document.querySelector('.member__slider-allslide'),
//           slide = document.querySelectorAll('.member__slide');
//     let slideIndex = 1;

//     showSlides(slideIndex);

//     if (slides.length < 10){
//         total.textContent = `0${slide.length}`;
//     } else{
//         total.textContent = slide.length;
//     }

//     function showSlides(n){
//         if (n > slides.length){
//             slideIndex = 1;
//         }

//         if (n < 1){
//             slideIndex = slides.length;
//         }

//         slides.forEach((item)=>{
//             item.classList.add('hide');
//         })
        
//         slides[slideIndex - 1].classList.remove('hide');

//         if (slides.length < 10){
//             current.textContent = `0${slideIndex}`;
//         } else{
//             current.textContent = slideIndex;
//         }
//     }

//     function plusSlides(n){
//         showSlides(slideIndex += n)
//     }

//     nextSlide.addEventListener('click', ()=>{
//         plusSlides(+1)
//     })
//     prevSlide.addEventListener('click', ()=>{
//         plusSlides(-1)
//     })

const swiper = new Swiper('.member__slider', {
  slidesPerView: 1,  
  loop:true,
  navigation: {
    nextEl: '.member__slider-next',
    prevEl: '.member__slider-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".member__slider-count",
    type: "fraction",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
    },
  },
});