import "./project.css";

const Project = ({img, link, desc}) => {
    return (
        <div className="project">
            
            <div className="project-browser">
                <div className="project-circle-case">
                    <div className="project-circle-card">
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                    </div>
                    
                    <div className="project-circle-card">
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                        <div className="project-circle"></div>
                    </div>
                </div>
                 
            </div>
                <a href={link} target="_blank" rel="noreferrer">
                    <img src={img} alt="" className="projectside-image" />
            </a>


            <div className="project-description">
                <h3>
                    {desc}
                </h3>
            </div>

        </div>
    )
}

export default Project;
