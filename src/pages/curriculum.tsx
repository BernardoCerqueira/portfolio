import Head from "next/head";
import CommonFooter from "@/components/common/CommonFooter"
import CommonHeader from "@/components/common/CommonHeader"
import styles from "@/styles/Curriculum.module.scss"

export default function Curriculum() {
    return (
        <>
            <Head>
                <title>Bernardo Cerqueira | Currículo</title>
                <link rel="shortcut icon" href="/iconBlack.svg" type="image/x-icon" />
            </Head>
            <div className={styles.page}>  
                <header className={styles.header}>
                    <CommonHeader/>
                </header>
                <main className={styles.main}>

                </main>
                <footer className={styles.footer}>
                    <CommonFooter />
                </footer>
            </div>
        </>
    )
}