import { Button } from "reactstrap"
import styles from "./CurriculumSection.module.scss"

export default function CurriculumSection() {

    const openPdfInNewTab = () => {
        const pdfUrl = "/curriculo-bernardo-cerqueira.pdf"
        window.open(pdfUrl, "_blank")
    }

    const downloadPdf = () => {
        const pdfUrl = "/curriculo-bernardo-cerqueira.pdf"
        const link = document.createElement("a")
        link.href = pdfUrl
        link.download = "curriculo-bernardo-cerqueira.pdf"
        link.click()
    }

    return (
        <div className={styles.main}>
            <h1 className={styles.title}>Currículo</h1>
            <p className={styles.text}>Tenha acesso ao meu currículo clicando em um dos botões abaixo.</p>
            <div className={styles.buttonsDiv}>
                <Button className={styles.button} onClick={openPdfInNewTab}>Ver</Button>
                <Button className={styles.button} onClick={downloadPdf}>Baixar</Button>
            </div>
        </div>
    )
}