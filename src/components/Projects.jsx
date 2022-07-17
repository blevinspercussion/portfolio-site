import './components.css';
import Project from './Project';

function Projects ({ projects }) {
    return (
        <div id='projects-div'>
            <h1>Front End Projects</h1>
            <div id='project-cards-div'>
            {projects.map((project, index) => (
                <Project key={project.key} project={project} />
            ))}
            </div>
        </div>
    )
}

export default Projects;