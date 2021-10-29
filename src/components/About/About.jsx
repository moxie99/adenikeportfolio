import "./about.css";
import AboutImg  from "../../images/about.JPG";
import core  from "../../images/core.png";
import violence  from "../../images/violence.png";
import SRHR  from "../../images/srhr.jpeg";

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={AboutImg} alt="about-avatar" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <div className="intro-description">
                    
                    <h2 className="about-me">
                            ABOUT ME
                    </h2>
                    <p className="about-desc"> 
                            I am a Public Health practitioner with 4+ years’ experience in Health and Development. Medically skilled in Public Health (HIV/AIDS, Sexual and ReSexual and Reproductive Health  and Epidemiology). Also, Skilled in Assessment and Analysis, Program planning, Implementation and Evaluation, Leadership, Communication, Partnership, Collaboration and Advocacy. I am good team leader and an effective team member who can effectively multi-task with innovative ideas.
                    </p>
                </div>
                <div className="area-of-focus">
                    <h3 className="core-area-text">
                    Core Areas Of Interest
                    </h3>
                    <div className="area-of-interest cards">
                    <div className="area-of-focus item">
                        <img src={violence} alt="No Violence" className="about-image-cards" />
                        <h6 className="area-of-focus-text">No Violence</h6>
                        </div>
                    <div className="area-of-focus item">
                        <img src={core} alt="No Violence" className="about-image-cards" />
                        <h6 className="area-of-focus-text">No To Rape And Assualts</h6>
                        </div>
                    <div className="area-of-focus item">
                        <img src={SRHR} alt="No Violence" className="about-image-cards" />
                        <h6 className="area-of-focus-text">Sexual Reproductive Health Rights</h6>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
