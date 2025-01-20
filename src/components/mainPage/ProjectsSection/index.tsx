import ProjectCard from "../ProjectCard";
import styles from "./ProjectsSection.module.scss"
import { Container } from "reactstrap";


export default function ProjectsSection(){
    return(
        <>
            <div className={styles.projectsSection}>
                <Container className={styles.projectsContainer}>
                    <h2 className={styles.projectsTitle}>Projetos</h2>
                    <div className={styles.projectsCardsSection}>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                        <ProjectCard/>
                    </div>
                </Container>
            </div>
        </>
    )
}