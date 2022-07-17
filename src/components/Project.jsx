import './components.css';

function Project ({ project }) {
    return (
        <div className='project-card'>
            <h3>{project.title}</h3>
            <p>Tech stack: {project.tech}</p>
            <img src={require("./img/" + project.key + ".png")}></img>
        </div>
    )
}

export default Project;