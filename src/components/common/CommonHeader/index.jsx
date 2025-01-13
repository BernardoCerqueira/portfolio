import styles from "./CommonHeader.module.scss"
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
import { Button } from "reactstrap";
import { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function CommonHeader() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <nav>
            <Link href={"/"}>
                <img
                    src="/logo.png"
                    alt="Logo"
                    className={styles.logo}
                />
            </Link>
            <Button
                className={styles.offcanvasButton}
                onClick={toggle}
            >
                <IoMenuOutline className={styles.offcanvasIcon} />
            </Button>

            <div>
                <Offcanvas
                    isOpen={isOpen}
                    toggle={toggle}
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
                                <Link href={"/projects"}>Projetos</Link>
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
        </nav>
    )
}