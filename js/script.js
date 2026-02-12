// scroll sections
const sections = document.querySelectorAll('section')
const navLinks = document.querySelectorAll('header nav a')
// stick navbar
const header = document.querySelector('header')
// toogle navbar
const menuIcon = document.querySelector('#menu-icon')
const navBar = document.querySelector('.navbar')
// characteres textarea
const textareaContact = document.querySelector('#textareaContact')
const msgTextareaContact = document.querySelector('#msgTextareaContact')
// buttons sweetalert
const aButtons = document.querySelectorAll('a')
const inputButton = document.querySelector('input[type="submit"]')
const socialMediaButtons = document.querySelectorAll('.social-media a')
const allButtons = Array.from(aButtons).concat(inputButton)
const buttonsBlocked = allButtons.filter( button => {
    const hrefIsNull = button.getAttribute('href') == null
    const isDisable = button.getAttribute('data-status') === 'disabled'
    
    if (hrefIsNull || isDisable) 
        return button    
})
// Switch language
const divSwitchLanguage = document.querySelector('.langs')
const buttonsLanguage = document.querySelectorAll('.button')

/*======================= Toggle icon navbar =======================*/
menuIcon.onclick = () => { 
    menuIcon.classList.toggle('bx-x') // box icon 
    navBar.classList.toggle('active')
}

/*======================= Scroll sections active link =======================*/
window.onscroll = () => {
    sections.forEach( section => {
        let top = window.scrollY
        let offset = section.offsetTop - 150
        let height = section.offsetHeight
        let id = section.getAttribute('id')
        const scrollIsContainedSession = top >= offset && top < (offset + height)
        
        if(scrollIsContainedSession) {
            navLinks.forEach(link => {
                link.classList.remove('active')
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active')
            })
        }
    })

    /*======================= Stick navbar =======================*/
    header.classList.toggle('sticky', window.scrollY > 100) // funciona fora ou dentro do onscroll

    /*======================= remove toggle icon and navbar when click navbar link (scroll) =======================*/
    menuIcon.classList.remove('bx-x') // box icon 
    navBar.classList.remove('active')
}

/*======================= count characteres textarea =======================*/
const switchStyleTextArea = (remove, add, remove2Elements = false) => {    
    if (remove2Elements) {
        msgTextareaContact.classList.remove(remove)
        msgTextareaContact.classList.remove(add)
    } else {
        msgTextareaContact.classList.remove(remove)
        msgTextareaContact.classList.add(add)
    }
}

textareaContact.addEventListener('input', event => {
    const lengthInputTextarea = event.target.value.length
    const maxCharactersTextarea = event.target.getAttribute('maxlength')
    const limitLengthCharacters = maxCharactersTextarea - 10

    if (lengthInputTextarea > 0) {  
        switchStyleTextArea('alert', 'stop', true)
        msgTextareaContact.textContent = `${lengthInputTextarea}/${maxCharactersTextarea}`

        if (lengthInputTextarea >= limitLengthCharacters) {
            switchStyleTextArea('stop', 'alert')
            msgTextareaContact.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>&nbsp;${lengthInputTextarea}&nbsp;/&nbsp;${maxCharactersTextarea}`
        } 
        
        if (lengthInputTextarea == maxCharactersTextarea) { 
            switchStyleTextArea('alert', 'stop')
            msgTextareaContact.innerHTML = `<i class="fa-solid fa-ban"></i>&nbsp;${lengthInputTextarea}&nbsp;/&nbsp;${maxCharactersTextarea}`
        } 
        
    } else {
        msgTextareaContact.textContent = ''
    }
})

/*======================= Switch multilanguage =======================*/
const switchButtonLanguage = button => {
    divSwitchLanguage.querySelector('.active').classList.remove('active')
    button.classList.add('active')
}

const changeLanguage = (tagsContentTextObject, language) => {
    for (const [key, value] of Object.entries(tagsContentTextObject)) {
        value.forEach((tagTextSon, index) => {
            if (key === 'home' && tagTextSon.localName === 'a') {
                tagTextSon.setAttribute('title', ContentText[language][key][index])
            } else if (key === 'contact' && tagTextSon.localName === 'input') {
                tagTextSon.setAttribute('value', ContentText[language][key][index])
            } else {
                tagTextSon.innerHTML = ContentText[language][key][index] // innerHTML
            }
        })
    } 
}

const generateTagsObjectForTranslator = () => {    
    const tagsFatherArray = ['head', 'header', '.home', '.about', '.portfolio', '.contact', '.footer', 'footer' ]
    const tagsContentTextObject = {}
    
    tagsFatherArray.forEach(tagFatherItem => {
        const tagFather = document.querySelector(tagFatherItem)
        const sunsTextTagFather = tagFather.querySelectorAll('.text')
        
        tagFatherItem = tagFatherItem.includes('.') 
            ? tagFatherItem.replace('.', '')
            : tagFatherItem
        
        tagsContentTextObject[tagFatherItem] = Array.from(sunsTextTagFather)
    })
    return tagsContentTextObject
}

const tagsContentTextObject = generateTagsObjectForTranslator()

// language get from localStorage
const languageLocalStorage = localStorage.getItem('Language')

if (languageLocalStorage !== null) {    
    buttonsLanguage.forEach(button => {
        if (button.getAttribute('Language') === languageLocalStorage) 
            switchButtonLanguage(button) // Switch button
    })  

    changeLanguage(tagsContentTextObject, languageLocalStorage) // Change language      
    initTyped(languageLocalStorage) /*======================= typed js =======================*/   
    initSweetAlert(languageLocalStorage) /*======================= Sweet Alert =======================*/
} else {       
    initTyped() /*======================= typed js =======================*/   
    initSweetAlert() /*======================= Sweet Alert =======================*/
}

// Evento ao clicar no botão
buttonsLanguage.forEach(button => {
    button.addEventListener('click', () => {            
        switchButtonLanguage(button) // Switch button
            
        const languageAttr = button.getAttribute('Language')
            
        changeLanguage(tagsContentTextObject, languageAttr)  // Change language  

        localStorage.setItem('Language', languageAttr)    
            
        initTyped(languageAttr) /*======================= typed js =======================*/   
        initSweetAlert(languageAttr) /*======================= Sweet Alert =======================*/
    })    
})

