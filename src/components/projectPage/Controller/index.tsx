import styles from "./Controller.module.scss"
import { Button } from "reactstrap";
import { database } from "@/database";
import { useRouter } from "next/router";

type props = {
    id: string | string[]
}

export default function Controller({ id }: props) {
    const router = useRouter()
    const projectsQtd = database.length
    
    const handleNext = (id: number) => {
        router.push(`/project/${id+1}`)
    }

    const handlePrev = (id: number) => {
        router.push(`/project/${id-1}`)
    }

    return (
        <div className={styles.div}>
            <div>
                {id == "1"
                    ?
                    null
                    :
                    <Button
                        className={styles.button}
                        onClick={() => handlePrev(+id)}
                    >
                        &lt; Anterior
                    </Button>
                }
            </div>
            <div>
                {+id == projectsQtd
                    ?
                    null
                    :
                    <Button
                        className={styles.button}
                        onClick={() => handleNext(+id)}
                    >
                        Próximo &gt;
                    </Button>
                }
            </div>
        </div>
    )
}