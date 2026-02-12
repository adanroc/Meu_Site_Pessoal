const initTyped = (language = 'EnglishUs') => {
    const typed = new Typed(
        '.multiple-text', 
        {
        strings: ContentTextTyped[language],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
        }
    )
}