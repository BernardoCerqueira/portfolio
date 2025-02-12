import styles from "@/styles/Curriculum.module.scss"
import Head from "next/head";
import CommonFooter from "@/components/common/CommonFooter"
import CommonHeader from "@/components/common/CommonHeader"
import CurriculumSection from "@/components/curriculumPage/CurriculumSection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Bernardo Cerqueira | Currículo",
    description: "Confira o currículo do Bernardo Cerqueira Marques e saiba mais sobre a sua carreira e suas habilidades.",
    openGraph: {
        title: "Bernardo Cerqueira | Currículo",
        description: "Confira o currículo do Bernardo Cerqueira Marques e saiba mais sobre a sua carreira e suas habilidades.",
        url: "https://becerqueira.com/curriculum",
        images: [
            {
                url: "/bernardo.jpg",
                alt: "Bê Cerqueira"
            }
        ]
    }
}

export default function Curriculum() {
    return (
        <>
            <Head>
                <title>Bernardo Cerqueira | Currículo</title>
                <link rel="shortcut icon" href="/iconBlack.svg" type="image/x-icon" />
            </Head>
            <div className={styles.page}>
                <header className={styles.header}>
                    <CommonHeader />
                </header>
                <main className={styles.main}>
                    <CurriculumSection />
                </main>
                <footer>
                    <CommonFooter />
                </footer>
            </div>
        </>
    )
}