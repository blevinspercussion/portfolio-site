import './components.css';
import Project from './Project';

function Projects ({ projects, mockups }) {
    return (
        <div id='projects-div'>
            <h1>Front End Projects</h1>
            <div className='project-cards-div'>
            {projects.map((project, index) => (
                <Project key={project.key} project={project} />
            ))}
            </div>
            <hr />
            <h1>Front End Mockups</h1>
            <p>
                All of the projects in this section were completed from challenges on frontendmentor.com from assets and reference images that were supplied 
                by frontendmentor.com. All code is my own.
            </p>
            <div className='project-cards-div'>
                {mockups.map((project, index) => (
                    <Project key={project.key} project={project} />
                ))}
            </div>
        </div>
    )
}

export default Projects;