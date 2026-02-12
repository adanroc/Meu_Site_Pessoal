const ContentText = {
    PortugueseBr: {
        head: {
            0: 'Adan Rocha',
        },
        header: {
            0: 'Adan Portifólio', // textLogo
            1: 'Início', // linksNavbar
            2: 'Sobre', 
            3: 'Portfólio', 
            4: 'Contato'
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
            1: `Lista de Tarefas`,
            2: `Projeto web. JavaScript puro e Framework Bootstrap. Front-End. Funcionalidades: Adicionar tarefa, Pesquisar tarefa, Destacar texto de pesquisa, Gerar mensagem de nenhum resultado encontrado.`,
            3: `Informações do Clima`,
            4: `Projeto web. JavaScript puro e Framework Bootstrap. Front-End. API AccuWeather. Funcionalidades: Requisições HTTP usando Async/Await, Histório com a LocalStorage, Controle de Requests: Quatidade máxima, Bloqueio de Requests multiplos, Contagem do tempo de bloqueio, Mensagens de feedback com alert`,
            5: `Site`,
            6: `Projeto Web desenvolvido com JavaScript e PHP.`,
            7: `Site`,
            8: `Projeto Web desenvolvido com JavaScript e PHP.`,
            9: `Site`,
            10: `Projeto Web desenvolvido com JavaScript e PHP.`,
            11: `Site`,
            12: `Projeto Web desenvolvido com JavaScript e PHP.`,
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
            0: `Copyright &copy; 2025 Adan Rocha. Todos os direitos reservados. Site produzido a partir do script de Codehal`
        }    
    },
    EnglishUs: {
        head: {
            0: 'Adan Rocha',
        },
        header: {
            0: 'Adan Portifolio', // textLogo
            1: 'Home', // linksNavbar
            2: 'About', 
            3: 'Portfolio', 
            4: 'Contact', 
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
            1: `To-Do List`,
            2: `Web project. Pure JavaScript and Bootstrap Framework. Front-End. Features: Add task, Search task, Highlight search text, Generate "no results found" message.`,
            3: `Web Site`,
            4: `Web project. Pure JavaScript and Bootstrap Framework. Front-End. AccuWeather API. Features: HTTP requests using Async/Await, History with LocalStorage, Request control: Maximum quantity, Blocking of multiple requests, Blocking time count, Feedback messages with alerts.`,
            5: `Web Site`,
            6: `Web project developed with JavaScript and PHP.`,
            7: `Web Site`,
            8: `Web project developed with JavaScript and PHP.`,
            9: `Web Site`,
            10: `Web project developed with JavaScript and PHP.`,
            11: `Web Site`,
            12: `Web project developed with JavaScript and PHP.`,
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
            0: `Copyright &copy; 2025 Adan Rocha. All Rights Reserved. Website created using Codehal's script.`
        }    
    }
}

const ContentTextTyped = {
    PortugueseBr: ['Desenvolvedor de Software', 'Desenvolvedor Front-End', 'Desenvolvedor Back-End', 'Engenheiro da Computação'],
    EnglishUs: ['Software Developer', 'Front-End Developer', 'Back-End Developer', 'Computer Engineering']
}

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

