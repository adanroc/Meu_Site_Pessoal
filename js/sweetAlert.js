const initSweetAlert = (language = 'EnglishUs') => {

    const languageSweet = ContentTextSweetAlert[language]

    const modalFeatureBloqued = {
        title: languageSweet.modalFeatureBloqued.title, 
        text: languageSweet.modalFeatureBloqued.text,
        icon: 'warning',
        confirmButtonText:  'Ok',
        confirmButtonColor:  '#3085d6'
    }
    
    const modalConfirmationRedirect = {
        title: languageSweet.modalConfirmationRedirect.title,
        text: languageSweet.modalConfirmationRedirect.text,
        icon: 'success',
        timer: 1500,
        timerProgressBar: true,
        showConfirmButton: false
    }
    
    const modalQuestionRedirect = {
        title: languageSweet.modalQuestionRedirect.title,
        text: ``,
        icon: 'question',    
        confirmButtonText:  'Ok',
        confirmButtonColor:  '#3085d6',
        showCancelButton: true,
        cancelButtonText:  languageSweet.modalQuestionRedirect.cancelButtonText,
        cancelButtonColor:  '#d33'
    }   
    
    const modalShowInformation = {
        title: ``,
        text: ``,
        icon: 'info',
        confirmButtonText:  'Ok',
        confirmButtonColor:  '#3085d6'
    }

    // Botões bloqueados
    buttonsBlocked.forEach(button => {  
            button.setAttribute('style', 'cursor: pointer')
            button.addEventListener('click', event => {
                event.preventDefault()
                Swal.fire(modalFeatureBloqued)
            })          
    })

    socialMediaButtons.forEach(button => {
        const hrefButton = button.getAttribute('href')
        const titleButton = button.getAttribute('title')
        const isWebsite = hrefButton.includes('http')
        
        if (!isWebsite) {
            // Botões com informações
            button.addEventListener('click', event => {
                event.preventDefault()
        
                let titleModalShowInformation = ''
                if (language === 'EnglishUs') {
                    titleModalShowInformation = `My ${titleButton} is:`
                } else if (language === 'PortugueseBr') {
                    titleModalShowInformation = `Meu ${titleButton} é:`
                }
                
                Swal.fire({...modalShowInformation,
                        title: titleModalShowInformation,
                        text: hrefButton})
            })         
        } else {
            // Botões com sites como links (redirect confirmation)       
            button.addEventListener('click', event => {
                event.preventDefault()
        
                Swal.fire({...modalQuestionRedirect, text: hrefButton})
                .then(result => {
                    if (result.isConfirmed) {
                        Swal.fire(modalConfirmationRedirect)
                        // .then(() => window.location.href = hrefButton) // mesma guia
                        .then(() => window.open(hrefButton, '_blank'))                      
                    }
                })
            })           
        }
    })
}    