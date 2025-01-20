import styles from "./ProjectCard.module.scss"

export default function ProjectCard() {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.imgSection}>
                    <a href="">
                        <img
                            src="/programmer-art.svg"
                            alt="teste"
                            className={styles.img}
                        />
                    </a>
                </div>
                <div className={styles.textSection}>
                    <h3 className={styles.title}>
                        <a href="">Devflix</a>
                    </h3>
                    <p className={styles.linkText}>
                        <a href="" className={styles.link}>devflix.com</a>
                    </p>
                    <p className={styles.description}>
                        DevFlix é uma plataforma de streaming de cursos de programação com uma interface totalmente responsiva.
                    </p>
                </div>
            </div>
            
        </>
    )
}