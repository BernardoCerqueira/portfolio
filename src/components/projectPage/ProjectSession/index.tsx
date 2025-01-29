import ReadMe from "../Readme";
import styles from "./ProjectSession.module.scss";
import React from 'react';

type props = {
    name: string
    link: string
    textLink: string
    techList: {backend?: string, frontend?: string, general?: string}
}

export default function ProjectSession({ name, link, textLink, techList }: props) {
    return (
        <div className={styles.projectSession}>
            <h1 className={styles.title}>{name}</h1>
            <a
                href={link}
                target="_blank"
                className={styles.link}
            >
                    {textLink}
            </a>
            <div className={styles.carousel}>
                [CARROSSEL AQUI]
            </div>
            <div className={styles.techList}>
                <p>Tecnologias utilizadas:</p>
                <p>
                    {techList.frontend ? "Frontend: " + techList.frontend : null}
                </p> 
                <p>
                    {techList.backend ? "Backend: " + techList.backend : null}
                </p>
                <p>
                    {techList.general ? techList.general : null}
                </p>
            </div>
            <div className={styles.description}>
                <ReadMe projectName={name}/>
            </div>
        </div>
    )
}

