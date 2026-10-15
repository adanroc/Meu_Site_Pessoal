/*======================= scroll reveal =======================*/
ScrollReveal (
    {
    //   reset: true,
      distance: '80px',
      duration: 2000,
      delay: 200 
    }
)

ScrollReveal().reveal(
    '.home-content, .heading .skills-container', 
    { origin: 'top' }
)
// ScrollReveal().reveal(
//     '.home-img, .services-container, .portfolio-box, .contact form, .donations-content', 
//     { origin: 'bottom' }
// )
// Test swiper
ScrollReveal().reveal(
    '.home-img, .services-container, .portfolio-projects-grid, .contact form, .donations-content', 
    { origin: 'bottom' }
)
ScrollReveal().reveal(
    '.home-content h1, .about-img',
     { origin: 'left' }
)
ScrollReveal().reveal(
    '.home-content p, .about-content, .donations, .donations-img', 
    { origin: 'right' }
)