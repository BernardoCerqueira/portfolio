import { Box } from "@radix-ui/themes";
import styles from "./HeroSection.module.scss"
import { Button } from "reactstrap";

export default function HeroSection(){
    return(
        <>
            <Box className={styles.background}>    
                <Box className={styles.blueDiv}>
                    <h1>Bernardo<br/>Cerqueira</h1>
                    <p>Eu sou um Desenvolvedor Web apaixonado por criar sites.</p>
                    <Button>Conhecer Mais</Button>
                </Box>
                <Box className={styles.greenDiv}> 
                        <img 
                            className={styles.heroImg}
                            src="/profile-pic.jpeg"
                            alt="Profile Picture" 
                        />
                </Box>
            </Box>
        </>
    )
}