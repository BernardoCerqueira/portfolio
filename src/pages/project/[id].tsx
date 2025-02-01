import styles from "@/styles/Project.module.scss"
import Head from "next/head"
import { database } from "@/database"
import { useRouter } from "next/router"
import Error from "@/components/projectPage/Error"
import CommonHeader from "@/components/common/CommonHeader"
import CommonFooter from "@/components/common/CommonFooter"
import ProjectSession from "@/components/projectPage/ProjectSession"
import { GetStaticPaths, GetStaticProps } from "next"
import Controller from "@/components/projectPage/Controller"

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
            <div className={styles.page}>
            <header className={styles.header}>
                    <CommonHeader />
                </header>
                <main className={styles.main}>
                    <ProjectSession
                        name={project.name}
                        link={project.link}
                        textLink={project.textLink}
                        techList={project.techList}
                        carouselImages={project.carouselImages}
                        carouselVideos={project.carouselVideos}
                    />
                    <Controller id={id}/>
                </main>
                <footer className={styles.footer}>
                    <CommonFooter />
                </footer>
            </div>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = database.map(el => {
        return {
            params: { id: el.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async () => {
    return {props: {}}
}