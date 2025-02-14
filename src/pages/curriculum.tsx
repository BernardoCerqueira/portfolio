import styles from "@/styles/Curriculum.module.scss"
import CommonFooter from "@/components/common/CommonFooter"
import CommonHeader from "@/components/common/CommonHeader"
import CurriculumSection from "@/components/curriculumPage/CurriculumSection";
import Head from "next/head";

export default function Curriculum() {
    return (
        <>
            <Head>
                <title>Bernardo Cerqueira | Desenvolvedor Web e Programador</title>
                <meta name="description" content="Confira o currículo do Bernardo Cerqueira Marques e saiba mais sobre a sua carreira e suas habilidades." />

                <meta property="og:title" content="Bernardo Cerqueira | Desenvolvedor Web e Programador" />
                <meta property="og:description" content="Confira o currículo do Bernardo Cerqueira Marques e saiba mais sobre a sua carreira e suas habilidades." />
                <meta property="og:url" content="https://www.becerqueira.com/curriculum" />
                <meta property="og:image" content="https://becerqueira.com/programmer-art.svg" />
                <meta property="og:image:alt" content="Bê Cerqueira" />
                <meta property="og:type" content="website" />

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