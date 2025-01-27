import Router from "next/router";
import styles from "./Error.module.scss"
import { Button } from "reactstrap";

export default function Error(){
    function handleClick(){
        const router = Router
        router.push("/")
    }

    return(
        <main className={styles.main}>
            <h1 className={styles.title}>Erro</h1>
            <p>Esta é uma rota inválida.</p>
            <Button className={styles.button} onClick={handleClick}>
                Retornar à página
            </Button>
        </main>
    )
}