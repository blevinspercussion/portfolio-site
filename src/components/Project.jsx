import { createElement } from 'react';
import './components.css';

function Project ({ project }) {

    const about = project.about;

    const clickHandler = (e) => {
        console.log(e);
        console.log(about);
        const aboutSection = createElement(about);
        const aboutDiv = document.getElementById('about-div');
        aboutDiv.appendChild(aboutSection);
    }

    return (
        <div className='project-card'>
            <h3>{project.title}</h3>
            <p>Tech stack: {project.tech}</p>
            <img src={require("./img/" + project.key + ".png")}></img>
            <br />
            <a href={project.codeUrl}>Github</a>
            <a href={project.liveDemoUrl}>Live Demo</a>
            <div className='about-div'>
                <p onClick={clickHandler}>About</p>
            </div>
        </div>
    )
}

export default Project;