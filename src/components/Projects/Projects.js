import ProjectFrame from './ProjectFrame';
import './Projects.css'
import GraduatedWork from './ProjectsInfo/GraduatedWork/GraduatedWork';
import Hangman from './ProjectsInfo/Hangman/Hangman';
import JobNinja from './ProjectsInfo/JobNinja/JobNinja';
function Projects() {
    let projectsInfo = [
        JobNinja,
        Hangman,
        GraduatedWork
    ]
    return ( 
        <div className="projects-container" id="projects">
            <div className="projects-title">Projects</div>
            {projectsInfo.map(projectInfo => <ProjectFrame projectInfo={projectInfo} />)}
        </div>
     );
}

export default Projects;