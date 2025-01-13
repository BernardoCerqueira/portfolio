import styles from "./HeroSection.module.scss"
import CommonHeader from "@/components/common/CommonHeader"
import { Box } from "@radix-ui/themes";
import { Button} from "reactstrap";
import { useRouter } from "next/router";

export default function HeroSection(){
    const router = useRouter()

    function handleClick(){
        router.push("/")
    }

    return(
        <>
            <Box className={styles.background}>    
                <Box className={styles.blueDiv}>
                    <h1>
                        Bernardo<br/>
                        Cerqueira
                        <span className={styles.titleSpan}>.</span>
                    </h1>
                    <p>
                        Desenvolvedor web apaixonado por criar sites atraentes e funcionais.
                    </p>
                    <Button onClick={handleClick}>Conhecer Mais</Button>
                </Box>
                <Box className={styles.greenDiv}> 
                        <img 
                            className={styles.heroImg}
                            src="/profile-pic.jpg"
                            alt="Profile Picture" 
                        />
                </Box>
            </Box>
        </>
    )
}