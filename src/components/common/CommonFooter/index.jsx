import Link from "next/link"
import styles from "./CommonFooter.module.scss"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

export default function CommonFooter(){
    const date = new Date()
    const year = date.getFullYear()

    return(
        <>
            <footer className={styles.footer}>
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
            </footer>
        </>
    )
}