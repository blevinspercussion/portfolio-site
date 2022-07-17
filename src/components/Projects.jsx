import './components.css';
import Project from './Project';

function Projects ({ projects }) {
    return (
        <div>
            <h1>Front End Projects</h1>
            {projects.map((project, index) => (
                <Project key={project.key} project={project} />
            ))}
        </div>
    )
}

export default Projects;