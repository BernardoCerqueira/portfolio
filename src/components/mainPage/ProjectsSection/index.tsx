import ProjectCard from "../ProjectCard";
import styles from "./ProjectsSection.module.scss"
import { Container } from "reactstrap";
import { database } from "@/database";

export default function ProjectsSection(){
    return(
        <>
            <div className={styles.projectsSection}>
                <Container className={styles.projectsContainer}>
                    <h2 className={styles.projectsTitle}>Projetos</h2>
                    <div className={styles.projectsCardsSection}>
                        {database.map((project) => (
                            <ProjectCard
                                key={project.id}
                                name={project.name}
                                description={project.description}
                                link={project.link}
                                textLink={project.textLink}
                                imgUrl={project.imgUrl}
                                pageName={project.pageName}
                            />
                        ))}
                    </div>
                </Container>
            </div>
        </>
    )
}