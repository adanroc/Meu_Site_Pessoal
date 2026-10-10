const year = new Date().getFullYear()

const ContentText = {
    PortugueseBr: {
        head: {
            0: 'Adan Rocha Portifólio',
        },
        header: {
            0: 'Adan Portifólio', // textLogo
            1: 'Início', // linksNavbar
            2: 'Sobre', 
            3: 'Portfólio', 
            4: 'Doações', 
            5: 'Contato'
        }, 
        home: {
            0: `Oi, me chamo`,
            1: `Adan Rocha`,
            2: `Sou <span class="multiple-text"></span>`,
            3: `Bem-Vindo(a) a minha Página Web Pessoal, nela você conhecerá um pouco sobre meus projetos e também um pouco sobre mim. Meus canais estão nos links abaixo e você pode também me contatar pelo formulário no final da página. Boa Diversão!`,
            4: `Site Pessoal`
        },
        about: {
            0: `Sobre <span>Mim</span>`,
            1: `Entusiasta de Tecnologia`, // Entusiasta de Tecnologia
            2: `Sou Brasileiro, amante de inovações tecnologicas, formado em Engenharia da Computação. Atuo no Desenvolvimento Web com JavaScript e PhP. Sempre preso pela excelência e simplicidade, afinal, o essencial nunca falha, e estou sempre pronto para novos desafios. A seguir, encontra-se meu portifólio, vamos "codar" um pouco ?!`
        },
        portfolio: {
            0: `<span>Projetos</span> Recentes`,
            // Charactere limits
            // --------------------
            1: `Lista de Tarefas`,
            // Limite de caracteres
            // ---------------------------------------------------------------------------------------------
            2: `Projeto web. JavaScript puro. Framework Bootstrap. Front-End.`, // Funcionalidades: Adicionar tarefa, Pesquisar tarefa, Destacar texto de pesquisa, Gerar mensagem de nenhum resultado encontrado.
            3: `Informações do Clima`,
            4: `Projeto web. JavaScript puro. Framework Bootstrap. Front-end. API AccuWeather. LocalStorage.`, //  Requisições HTTP (Async/Await) // Funcionalidades: requisições HTTP com Async/Await, histórico com LocalStorage, controle de requisições: quantidade, múltiplas requisições, contagem de tempo, mensagens de feedback.
            5: `Editor de Imagem`,
            6: `Projeto web. JavaScript. Biblitoeca Cropper. Front-End.`,
            7: `Site`,
            8: `Projeto Web desenvolvido com JavaScript e PHP.`,
            9: `Site`,
            10: `Projeto Web desenvolvido com JavaScript e PHP.`,
            11: `Site`,
            12: `Projeto Web desenvolvido com JavaScript e PHP.`,
        },
        donations: {
            0: `<span>Doações</span> para meu trabalho`,
            1: `Olá novamente, pessoa! Você gostou? Incrível, não é mesmo?!`,
            2: `Bom, para conseguir esse feito, muito trabalho foi realizado nos bastidores, e não estou falando aqui apenas sobre a codificação. Isso também tem a ver com anos e anos de <span>dedicação e sacrifícios</span> para chegar até aqui! `,
            3: `Então, deixo aqui para você, irmão(ã), meus agradecimentos e um grande abraço. Até breve!`,
            // 4: `Pix - Sistema de Pagamento Instantâneo Brasileiro`
            // Texto completo 1: `Olá novamente, pessoa! Você gostou? Incrível, não é mesmo?! Bom, para conseguir esse feito, muito trabalho foi realizado nos bastidores, e não estou falando aqui apenas sobre a codificação. Isso também tem a ver com anos e anos de dedicação e sacrifícios para chegar até aqui! Imagine uma conquista sua, a sua maior conquista. Quando você subiu ao pódio, a maioria das pessoas viu apenas a cor dourada da medalha de ouro, mas só você sabe o caminho das pedras que precisou atravessar. Bom, é exatamente disso que estou falando: <span>lutar e vencer</span>. Então, deixo aqui para você, irmão(ã), meus agradecimentos e um grande abraço. Até breve!`
        },
        contact: {
            0: `Entre em contato <span>Comigo!</span>`,
            1: 'Nome Completo', // divLabelInputFullName
            2: 'Endereço de e-mail', // divLabelInputEmailAddress
            3: 'Número de telefone', // divLabelInputMobileNumber
            4: 'Assunto do e-mail', // divLabelInputEmailSubject
            5: 'Sua Mensagem', // divLabelTextareaYourMessage
            6: `Enviar Mensagem` // Button Contact Me
        },
        footer: {
            0: `Copyright &copy; ${year} Adan Rocha. Todos os direitos reservados. Site produzido a partir do script de Codehal`
        }    
    },
    EnglishUs: {
        head: {
            0: 'Adan Rocha Portifóolio',
        },
        header: {
            0: 'Adan Portifolio', // textLogo
            1: 'Home', // linksNavbar
            2: 'About', 
            3: 'Portfolio', 
            4: 'Donations', 
            5: 'Contact', 
        },    
        home: {
            0: `Hi, It's Me`,
            1: `Adan Rocha`,
            2: `I'm a <span class="multiple-text"></span>`,
            3: `Welcome to my personal website! Here you'll learn a little about my projects and about me. My channels are linked below, and you can also contact me using the form at the bottom of the page. Have fun!`,
            4: `Personal Web Page`
        },
        about: {
            0: `About <span class="text">Me</span>`,
            1: `Technology Enthusiast`, // Entusiasta de Tecnologia
            2: `I'm Brazilian, a lover of technological innovations, and a graduate in Computer Engineering. I work in Web Development with JavaScript and PHP. I always strive for excellence and simplicity, because what's essential never fails, and I'm always ready for new challenges. Below you'll find my portfolio, let's code a little!`, 
        },
        portfolio: {
            0: `Latest <span>Project</span>`,
            // Charactere limits
            // --------------------
            1: `To-Do List`,
            // Charactere limits
            // ---------------------------------------------------------------------------------------------
            2: `Web project. Pure JavaScript. Bootstrap Framework. Front End.`, // Features: Add task, Search task, Highlight search text, Generate "no results found" message.
            3: `Weather Information`,
            4: `Web project. Pure JavaScript and Bootstrap Framework. Front-End. AccuWeather API.`, // Features: HTTP requests using Async/Await, History with LocalStorage, Request control: quantity, multiple requests, time count, Feedback messages
            5: `Image Editor`,
            6: `Web project. JavaScript. Cropper Library. Front-End.`,
            7: `Web Site`,
            8: `Web project developed with JavaScript and PHP.`,
            9: `Web Site`,
            10: `Web project developed with JavaScript and PHP.`,
            11: `Web Site`,
            12: `Web project developed with JavaScript and PHP.`,
        },
        donations: {
            0: `<span>Donations</span> for my work`,
            1: `Hello again! Did you like it? It’s amazing, isn’t it?`,
            2: `Well, achieving this took a lot of hard work behind the scenes—and I’m not just talking about the coding. It also involved years of <span>dedication and sacrifice</span> to get to this point! `,
            3: `So, I leave you with my thanks and a big hug. See you soon!`,
            // 4: `Pix – Brazilian Instant Payment System`
            // 1: `Hello again! Did you like it? It’s amazing, isn’t it? Well, achieving this took a lot of hard work behind the scenes—and I’m not just talking about the coding. It also involved years of dedication and sacrifice to get to this point! Think of an achievement of yours—your greatest one. When you stepped onto the podium, most people saw only the gold of the medal, but only you know the rocky path you had to travel to get there. That is exactly what I’m talking about: <span>the struggle and the victory</span>. So, I leave you with my thanks and a big hug. See you soon!`
        },
        contact: {
            0: `Contact <span>Me!</span>`,
            1: 'Full Name', // divLabelInputFullName
            2: 'Email Address', // divLabelInputEmailAddress
            3: 'Mobile Number', // divLabelInputMobileNumber
            4: 'Email Subject', // divLabelInputEmailSubject
            5: 'Your Message', // divLabelTextareaYourMessage
            6: `Send Message` // Button Contact Me
        },
        footer: {
            0: `Copyright &copy; ${year} Adan Rocha. All Rights Reserved. Website created using Codehal's script.`
        }    
    }
}

const ContentTextTyped = {
    PortugueseBr: ['Desenvolvedor de Software', 'Desenvolvedor Front-End', 'Desenvolvedor Back-End', 'Engenheiro da Computação'],
    EnglishUs: ['Software Developer', 'Front-End Developer', 'Back-End Developer', 'Computer Engineering']
}

// const ContentTextTyped2 = {
//     PortugueseBr: ['1. Abra o App do Banco', '2. Acesse a Área Pix', '3. Selecione "Ler QR Code"', '4. Aponte a Câmera do aparelho', '5. Faça a DOAÇÃO'],
//     EnglishUs: ['1. Open your banking app', '2. Go to the Pix section', '3. Select "Scan QR Code"', "4. Point your device's camera", '5. Make the donation']
// }

{/* <div class="scan-qrcode-guide">
    <p class="text">1. Open your banking app</p>
    <p class="text">2. Go to the Pix section</p>
    <p class="text">3. Select "Scan QR Code"</p>
    <p class="text">4. Point your device's camera</p>
    <p class="text">5. Make the donation</p>
</div> */}

const ContentTextSweetAlert = {
    PortugueseBr: {
        modalFeatureBloqued: {
            title: 'Ops, Desculpe!',
            text: 'Este recurso está em desenvolvimento... Disponibilizaremos ele em breve!'
        },
        modalConfirmationRedirect: {
            title: 'Ok, Vamos lá.',
            text: 'Redirecionando...'
        },
        modalQuestionRedirect: {
            title: `Você realmente deseja acessar o site ?`,
            cancelButtonText:  'Cancelar'
        }
        // modalShowInformation: {
        //     title: `My ${titleButton} is:`
        // }
    },
    EnglishUs: {
        modalFeatureBloqued: {
            title: 'Oh, so Sorry!',
            text: 'This feature is under development... We will make it available soon!'
        },
        modalConfirmationRedirect: {
            title: 'Ok, let\'s Go',
            text: 'Redirecting...'
        },
        modalQuestionRedirect: {
            title: `Do you really want to access the website ?`,
            cancelButtonText:  'Cancel'
        }
        // modalShowInformation: {
        //     title: `My ${titleButton} is:`
        // }
    }
}

