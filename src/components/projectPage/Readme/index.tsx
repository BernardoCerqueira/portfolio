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
        case "Lofrano Arquitetura":
            return (
                <>
                    <p>Lofrano Arquitetura é um website desenvolvido com Next.js/React, oferecendo uma experiência elegante e funcional para apresentação de <strong>serviços de arquitetura</strong>. O site possui uma <strong>página principal</strong> com diversas seções e uma <strong>área administrativa</strong> para gestão de conteúdo. Desenvolvi essa aplicação para o arquiteto <a href="https://www.lofranoarquitetura.com.br" target="_blank" rel="noopener noreferrer" className={styles.a}>João Pedro Lofrano</a>, de Petrópolis.</p>
                </>
            )
        break
        case "RocketX":
            return (
                <>
                    <p>A <strong>RocketX</strong> é uma página completamente <strong>responsiva</strong> e <strong>interativa</strong> inspirada no site oficial da SpaceX. Esse projeto foi desenhado para entregar uma experiência moderna ao usuário, com um layout elegante e com uma <strong>navegação fluida</strong>.</p>
                </>
            )
        break
        case "Draw Simulator":
            return (
                <>
                    <p><strong>Draw Simulator</strong> é uma aplicação web interativa que permite realizar sorteios personalizados de grupos entre times definidos pelo usuário. Com uma interface simples e flexível, a aplicação foi projetada para <strong>criar grupos com ou sem a utilização de potes</strong>, tornando-a ideal para campeonatos, eventos ou outras competições. A ideia surgiu a partir de uma demanda real: o canal Bruninho e Simões, do YouTube, queria uma interface simples para vislumbrar e brincar de prever como poderia terminar o sorteio de competições de futebol que ainda estavam por vir.</p>
                </>
            )
        break
        case "BLACK: e-commerce":
            return (
                <>
                    <p>O <strong>BLACK: e-commerce</strong> se propõe a criar uma interface de navegação moderna na qual os usuários podem <strong>navegar por produtos, administrar o carrinho de compras</strong> e salvar os itens do carrinho usando Local Storage. Tudo isso é feito de forma fácil e dinâmica, tornando agradável a experiência do usuário.</p>
                </>
            )
        break
        case "Leads API":
            return (
                <>
                    <p>A <strong>Leads API</strong> foi feita para administrar um universo de Leads, Grupos e Campanhas. Com ela, o usuário consegue realizar operações de <strong>criação, leitura, atualização e exclusão</strong> de instâncias dessas entidades. A API tem seu próprio banco de dados, dedicado a salvar todas as informações da aplicação. Além disso, as operações contam com <strong>paginação e filtros avançados</strong>, tornando a experiência muito mais prática.</p>
                </>
            )
        break
        case "Stock Manager":
            return (
                <>
                    <p>O <strong>Stock Manager</strong> é uma aplicação responsiva criada para facilitar a <strong>administração de produtos</strong> de uma loja virtual ou de qualquer outro estoque. Com ela, o usuário é capaz de ver todos os itens ou um item em específico. Além disso, ele pode criar, atualizar e deletar itens. Tudo isso é feito de maneira fácil e interativa.</p>
                </>
            )
        break
        default:
            return (<></>)
        break
    }
}