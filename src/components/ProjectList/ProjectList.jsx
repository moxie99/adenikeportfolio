import "./projectList.css";
import Project from '../Project/Project';
import { programs } from "../../data"; 

const Projects = () => {
    return (
        <div className="projects">  
            <div className="projects-texts">
                <h2 className="projects-title">
                    PAST PROJECTS AND DEVELOPMENTAL WORKS
                </h2>
                <p className="projects-desc">
                    I have worked effectively and efficiently to plan, design, execute,evaluate, and monitor the following projects. In all cases, I have functioned either as a team or dynamic team member. 
                </p>
            </div>
            <div className="projects-list">
                {
                    programs.map( (item) => 
                        (
                        <Project key={item.id}
                            img={item.img} link={item.link} desc={item.desc} />
                            
                        )

                    )
                }
            </div>
            
        </div>
    )
}

export default Projects;
