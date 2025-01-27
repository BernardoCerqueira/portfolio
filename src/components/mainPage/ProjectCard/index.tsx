import styles from "./ProjectCard.module.scss"

type props = {
    id: number
    name: string
    description: string
    link: string
    textLink: string
    imgUrl: string
}

export default function ProjectCard({id, name, description, link, textLink, imgUrl}: props) {
    const isSvg = imgUrl.slice(-4) === ".svg"

    return (
        <>
            <div className={styles.card}>
                <div className={styles.imgSection}>
                    <a href={`/project/${id}`} target="_self">
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
                            href={`/project/${id}`}
                            target="_self"
                        >
                            {name}
                        </a>
                    </h3>
                    <p className={styles.linkText}>
                        <a
                            href={link === "" ? `/project/${id}` : link}
                            rel="noopener noreferrer"
                            target={link === "" ? "_self" : "_blank"}
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