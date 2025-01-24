import { Container } from "reactstrap"
import styles from "./PresentationSection.module.scss"
import Link from "next/link"

export default function PresentationSection() {
    return (
        <Container className={styles.presentationSection}>
            <Container className={styles.aboutMe}>
                <Container className={styles.aboutMeText}>
                    <h1 className={styles.aboutMeTitle}>Sobre Mim</h1>
                    <p className={styles.aboutMeText}>
                        Olá! Sou um desenvolvedor fullstack apaixonado por tecnologia e em busca da minha primeira oportunidade profissional na área. Recentemente, concluí o curso <span className={styles.highlight}>JavaScript Fullstack</span> da Onebitcode, no qual adquiri uma base sólida em desenvolvimento web e trabalhei em diversos projetos que demonstram minhas habilidades práticas <Link href={"#projects"} className={styles.link}><span className={styles.highlight}>(confira na seção de projetos)</span></Link>.
                    </p>
                    <p className={styles.aboutMeText}>
                        Meu processo de trabalho é guiado pela busca por soluções inteligentes e bem planejadas. Antes de codar, gosto de analisar o problema, pensar nas melhores alternativas e só então implementar a solução. Isso reflete meu compromisso com a qualidade e a eficiência.
                    </p>
                    <p className={styles.aboutMeText}>
                        Quando não estou programando, gosto de estudar, aprender novas línguas, praticar esportes, jogar videogames e ouvir música. Essas atividades me ajudam a manter um equilíbrio entre trabalho e lazer, além de inspirar minha criatividade no desenvolvimento.
                    </p>
                </Container>
                <Container className={styles.aboutMeImageDiv}>
                    <img src="/programmer-art.svg" alt="A programmer coding..." className={styles.aboutMeImage} />
                </Container>
            </Container>
            <Container className={styles.techStack}>
                <Container className={styles.techStackTextDiv}>
                    <h1 className={styles.techStackTitle}>Habilidades e Objetivos
                    </h1>
                    <p className={styles.techStackText}>
                        Tenho experiência com <span className={styles.highlight}>HTML5, CSS3, JavaScript, TypeScript, Sass, Bootstrap e Tailwind CSS</span>, além de ferramentas como <span className={styles.highlight}>Git e GitHub</span> para versionamento de código.
                    </p>
                    <p className={styles.techStackText}>
                        No front-end, domino frameworks como <span className={styles.highlight}>React e Next.js</span>, construindo interfaces modernas e responsivas. No back-end, meu foco é em <span className={styles.highlight}>Node.js e Express.js</span>, com integração a bancos de dados <span className={styles.highlight}>PostgreSQL via Prisma</span>.
                    </p>
                    <p className={styles.techStackText}>
                        Tenho interesse tanto no front-end quanto no back-end, com um desejo especial de explorar mais o mundo dos bancos de dados. Meu objetivo é crescer constantemente como desenvolvedor, aprendendo com profissionais experientes e contribuindo para projetos impactantes. Estou animado para começar minha jornada profissional e contribuir para o sucesso de uma equipe que valorize o meu crescimento e o meu aprendizado.
                    </p>
                </Container>
                <Container className={styles.techStackImageDiv}>
                    <img src="/laptop.jpg" alt="A laptop" className={styles.techStackImage}/>
                </Container>
            </Container>        
        </Container>
    )
}