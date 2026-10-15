
const portfolioSwiper = new Swiper(".portfolio-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 30,

    speed: 800,    
    loop: true, // Deixe false enquanto houver somente um slide.

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
    },

    navigation: {
        nextEl: ".portfolio-next",
        prevEl: ".portfolio-prev"
    },

    pagination: {
        el: ".portfolio-pagination",
        clickable: true
    }
});

// function initPortfolioSwiper() {
//     const portfolioSwiper = new Swiper(".portfolio-swiper", {
//         slidesPerView: 1,
//         slidesPerGroup: 1,
//         spaceBetween: 30,
//         speed: 800,
//         loop: true,

//         observer: true,
//         observeParents: true,
//         updateOnWindowResize: true,

//         autoplay: {
//             delay: 3000,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true
//         },

//         navigation: {
//             nextEl: ".portfolio-next",
//             prevEl: ".portfolio-prev"
//         },

//         pagination: {
//             el: ".portfolio-pagination",
//             clickable: true
//         }
//     });

//     // Atualiza as dimensões após o carregamento completo
//     portfolioSwiper.update();

//     requestAnimationFrame(() => {
//         portfolioSwiper.update();
//     });
// }

// if (document.readyState === "complete") {
//     initPortfolioSwiper();
// } else {
//     window.addEventListener("load", initPortfolioSwiper, {
//         once: true
//     });
// }