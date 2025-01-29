import styles from "./Readme.module.scss"

type props = {
    projectName: string
}

export default function ReadMe({projectName}: props) {
    switch (projectName) {
        case "OneBitFlix":
            return (
                <>
                    <p><strong>OneBitFlix</strong> é uma <strong>plataforma de streaming</strong> focada em cursos de programação, desenvolvida para proporcionar uma experiência intuitiva tanto para os usuários finais quanto para os administradores. Os alunos podem explorar os cursos por meio de uma interface agradável, moderna e totalmente responsiva. A administração de cursos e episódios é facilitada pelo AdminJS, permitindo uma gestão eficiente e sem complicações. Além disso, todas as rotas são autenticadas e a alteração de senha conta com toda a lógica necessária para ser feita de forma adequada. A aplicação salva o progresso do usuário nos episódios, fazendo com que ele possa voltar a assistir os vídeos automaticamente de onde havia parado.</p>
                </>
            )
        break
        case "RocketX":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        case "Draw Simulator":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        case "BLACK: e-commerce":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        case "Leads API":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        case "Stock Manager":
            return (
                <>
                    <p>Teste</p>
                </>
            )
        break
        default:
            return (<></>)
        break
    }
}