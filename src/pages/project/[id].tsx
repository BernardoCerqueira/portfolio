import Head from "next/head"
import { database } from "@/database"
import { useRouter } from "next/router"
import Error from "@/components/projectPage/Error"

export default function Project() {
    const router = useRouter()
    const {id} = router.query
    
    if(!id){
        return(
            <Error/>
        )
    }

    const project = database.find(p => p.id == +id)

    if(!project){
        return(
            <Error/>
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