import ProjectCard from "../ProjectCard";
import styles from "./ProjectsSection.module.scss"
import { Container } from "reactstrap";
import { database } from "@/database";
import { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function ProjectsSection(){
    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true
        })
    }, [])

    return(
        <>
            <div className={styles.projectsSection}>
                <Container className={styles.projectsContainer}>
                    <h2 className={styles.projectsTitle}>Projetos</h2>
                    <div className={styles.projectsCardsSection}  data-aos="fade-up">
                        {database.map((project) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                name={project.name}
                                description={project.description}
                                link={project.link}
                                textLink={project.textLink}
                                imgUrl={project.imgUrl}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}