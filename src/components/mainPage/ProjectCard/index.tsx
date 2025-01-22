import styles from "./ProjectCard.module.scss"

type props = {
    name: string
    description: string
    link: string
    textLink: string
    imgUrl: string
}

export default function ProjectCard({name, description, link, textLink, imgUrl}: props) {
    const pageName = name.toLowerCase().replace(/(\s)/g, "")
    const isSvg = imgUrl.slice(-4) === ".svg"

    return (
        <>
            <div className={styles.card}>
                <div className={styles.imgSection}>
                    <a href={`/projects/${pageName}`} rel="noopener noreferrer" target="_blank">
                        <img
                            src={imgUrl}
                            alt={name}
                            className={ isSvg ? `${styles.img} ${styles.svg}` : styles.img}
                        />
                    </a>
                </div>
                <div className={styles.textSection}>
                    <h3 className={styles.title}>
                        <a
                            href={`/projects/${pageName}`}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            {name}
                        </a>
                    </h3>
                    <p className={styles.linkText}>
                        <a
                            href={link === "" ? `/projects/${pageName}` : link}
                            rel="noopener noreferrer"
                            target="_blank"
                            className={styles.link}
                        >
                                {textLink === "" ? "Conheça mais" : textLink}
                        </a>
                    </p>
                    <p className={styles.description}>
                        {description}
                    </p>
                </div>
            </div>
        </>
    )
}