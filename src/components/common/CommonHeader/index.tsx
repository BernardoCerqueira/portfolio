import { useRouter } from "next/router"
import styles from "./CommonHeader.module.scss"
import { useState } from "react"
import Link from "next/link"
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap"
import { IoMenuOutline } from "react-icons/io5"
import { MdEmail } from "react-icons/md"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function CommonHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <nav className={styles.header}>
                <Link href={"/#hero"}>
                    <img
                        src="/logo.png"
                        alt="Logo"
                        className={styles.logo}
                    />
                </Link>
                <div className={styles.buttons}>
                    <Button onClick={() => router.push("/")}>Home</Button>
                    <Button onClick={() => router.push("/#projects")}>Projetos</Button>
                    <Button onClick={() => router.push("/curriculum")}>Currículo</Button>
                </div>
                <Button
                    className={styles.offcanvasButton}
                    onClick={toggle}
                >
                    <IoMenuOutline className={styles.offcanvasIcon} />
                </Button>

            </nav>
            <div>
                <Offcanvas
                    isOpen={isOpen}
                    toggle={toggle}
                    scrollable
                    returnFocusAfterClose={false}
                    direction="end"
                    className={styles.offcanvas}
                >
                    <OffcanvasHeader
                        toggle={toggle}
                        className={styles.offcanvasHeader}
                    >
                        <h2>Menu Principal</h2>
                    </OffcanvasHeader>
                    <OffcanvasBody className={styles.offcanvasBody}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <Link href={"/"}>Home</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link href={"/#projects"}>Projetos</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link href={"/curriculum"}>Currículo</Link>
                            </li>
                        </ul>
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
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </>
    )
}