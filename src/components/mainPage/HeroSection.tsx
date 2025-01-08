import styles from "./HeroSection.module.scss"
import { Button } from "reactstrap";

export default function HeroSection(){
    return(
        <>
            <h1>Bernardo Cerqueira</h1>
            <h2>Web Developer</h2>
            <img 
                className={styles.heroImg}
                src="/profile-pic.jpeg"
                alt="Profile Picture" 
            />
            <Button>Conhecer Mais</Button>
        </>
    )
}