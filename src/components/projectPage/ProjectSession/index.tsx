import styles from "./ProjectSession.module.scss";
import React from 'react';

type props = {
    name: string
    link: string
    textLink: string
}

export default function ProjectSession({ name, link, textLink }: props) {
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
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magni atque officia sint? Eligendi expedita alias obcaecati sapiente nobis ipsam temporibus iure? Blanditiis eaque voluptas nam voluptatem cum odio enim neque, reiciendis sint quaerat incidunt, laborum porro voluptate ad, quia rerum animi iusto nobis! Sit voluptatum harum culpa sunt porro doloribus, nostrum id quae molestiae sapiente ratione odit dicta iusto dolor deleniti voluptatem eius ducimus non enim. Cum exercitationem illum ab placeat repellendus, voluptates et facere. Doloremque adipisci rem ullam quam unde consequuntur, perferendis vel nemo dignissimos illum architecto autem nam veniam temporibus cum fugiat sapiente dolorum nesciunt! Tempora, expedita?</p>
        </div>
    )
}

