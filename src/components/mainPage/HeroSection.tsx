import styles from "./HeroSection.module.scss"
import { Box } from "@radix-ui/themes";
import { Button, Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

export default function HeroSection(){
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()

    function handleClick(){
        router.push("/")
    }

    const toggle = () => setIsOpen(!isOpen)

    return(
        <>
            <Link href={"/"}>
                <img src="/logo.png" alt="Logo" className={styles.logo}/>
            </Link>
            <Button
                    className={styles.offcanvasButton}
                    onClick={toggle}
                >
                    <IoMenuOutline className={styles.offcanvasIcon}/>
            </Button>
            <Box className={styles.background}>    
                <Box className={styles.blueDiv}>
                    <h1>Bernardo<br/>Cerqueira</h1>
                    <p>Eu sou um Desenvolvedor Web apaixonado por criar sites.</p>
                    <Button onClick={handleClick}>Conhecer Mais</Button>
                </Box>
                <Box className={styles.greenDiv}> 
                        <img 
                            className={styles.heroImg}
                            src="/profile-pic.jpeg"
                            alt="Profile Picture" 
                        />
                </Box>
            </Box>

            <div>
                <Offcanvas
                    isOpen={isOpen}
                    toggle={toggle}
                    direction="end"
                >
                    <OffcanvasHeader toggle={toggle}>
                        Offcanvas
                    </OffcanvasHeader>
                    <OffcanvasBody>
                        <strong>
                            This is the Offcanvas body.
                        </strong>
                    </OffcanvasBody>
                </Offcanvas>
            </div>
        </>
    )
}