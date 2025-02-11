import styles from "./MainHeader.module.scss"
import { IoMenuOutline } from "react-icons/io5";
import Link from "next/link";
import { Button } from "reactstrap";
import { useState } from "react";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useRouter } from "next/router";

export default function MainHeader() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <nav className={styles.header}>
                <Link href={"#hero"}>
                    <img
                        src="/logoWhite.png"
                        alt="Logo"
                        className={styles.logo}
                    />
                </Link>
                <div className={styles.buttons}>
                    <Button onClick={() => router.push("#hero")}>Home</Button>
                    <Button onClick={() => router.push("#projects")}>Projetos</Button>
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
                        close={<Button className={styles.closeButton} onClick={toggle}>x</Button>}
                    >
                        <p>Menu Principal</p>
                    </OffcanvasHeader>
                    <OffcanvasBody className={styles.offcanvasBody}>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <Link href={"#hero"}>Home</Link>
                            </li>
                            <li className={styles.listItem}>
                                <Link href={"#projects"}>Projetos</Link>
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