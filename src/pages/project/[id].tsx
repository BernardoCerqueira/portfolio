import Head from "next/head"
import { database } from "@/database"
import { useRouter } from "next/router"

export default function Project() {
    const router = useRouter()
    const {id} = router.query
    
    if(!id){
        return(
            <h1>Não foi possível encontrar esse projeto...</h1>
        )
    }

    const project = database.find(p => p.id == +id)
    if(!project){
        return(
            <h1>Não foi possível encontrar esse projeto...</h1>
        )
    }

    return (
        <>
            <Head>
                <title>Bernardo Cerqueira | {project.name}</title>
                <link rel="shortcut icon" href="/iconBlack.svg" type="image/x-icon" />
            </Head>
        </>
    )
}