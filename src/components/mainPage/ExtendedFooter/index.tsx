import styles from "./ExtendedFooter.module.scss"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Container } from "reactstrap";

export default function ExtendedFooter() {
    const date = new Date()
    const year = date.getFullYear()

    return (
        <>
            <footer className={styles.footer}>
                <Container className={styles.footerContainer}>
                    <div className={styles.topFooter}>
                        <h2>ENTRE EM CONTATO</h2>
                        <div className={styles.flex}>
                            <div>
                                <a href="mailto:becerqueira.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <p className={styles.email}>
                                        becerqueira.dev@gmail.com
                                    </p>
                                </a>
                            </div>
                            <div>
                                <a href="#hero">
                                    <p className={styles.redirect}>Home</p>
                                </a>
                                <a href="/projects">
                                    <p className={styles.redirect}>Projetos</p>
                                </a>
                                <a href="/curriculum">
                                    <p className={styles.redirect}>Currículo</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomFooter}>
                        <p className={styles.copyright}>
                            &copy; Bernardo Cerqueira {year}
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="mailto:becerqueira.dev@gmail.com" target="_blank" rel="noopener noreferrer" className={styles.emailIcon}>
                                <MdEmail />
                            </a>
                            <a href="https://github.com/BernardoCerqueira" target="_blank" rel="noopener noreferrer" className={styles.githubIcon}>
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/bernardo-cerqueira-dev/" target="_blank" rel="noopener noreferrer" className={styles.linkedinIcon}>
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>
                </Container>
            </footer>
        </>
    )
}