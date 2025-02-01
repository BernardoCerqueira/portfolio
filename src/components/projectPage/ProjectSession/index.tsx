import ReadMe from "../Readme";
import ReactStrapCarousel from "./Carousel";
import styles from "./ProjectSession.module.scss";
import React from 'react';
import VideoCarousel from "./VideoCarousel";

type props = {
    name: string
    link: string
    textLink: string
    techList: { backend?: string, frontend?: string, general?: string }
    carouselImages?: {
        src: string,
        altText: string,
        caption: string,
        key: number
    }[]
    carouselVideos?:{
        src: string,
        altText: string,
        caption: string,
        key: number
    }[]
}

export default function ProjectSession({ name, link, textLink, techList, carouselImages, carouselVideos }: props) {
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
            {
                carouselImages ? 
                    <div className={styles.carousel}>
                        <ReactStrapCarousel images={carouselImages} name={name}/>
                    </div>
                : null        
            }
            {
                carouselVideos ?
                    <div className={styles.carousel}>
                        <VideoCarousel videos={carouselVideos} />
                    </div>
                : null
            }
            <div className={styles.techList}>
                <div className={styles.techText}>
                    <span className={styles.techListTitle}>Tecnologias utilizadas: </span>
                    {techList.general
                        ? techList.general
                        : null
                    }
                </div>
                <div className={styles.techListItem}>
                    {techList.frontend
                        ?
                        <p>
                            <span className={styles.techListTitle}>
                                Frontend -
                            </span> {techList.frontend}
                        </p>
                        : null
                    }
                </div>
                <div className={styles.techListItem}>
                    {techList.backend
                        ?
                        <p>
                            <span className={styles.techListTitle}>
                                Backend -
                            </span> {techList.backend}
                        </p>
                        : null
                    }
                </div>
            </div>
            <div className={styles.description}>
                <ReadMe projectName={name} />
            </div>
        </div>
    )
}

