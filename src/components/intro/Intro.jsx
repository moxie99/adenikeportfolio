import './Intro.css';
import hero from '../../images/hero.JPG';
import { BsFillMouse2Fill } from 'react-icons/bs';


const Intro = () => {
    return (
        <>
            
            <div className="intro"> 
                <div className="intro-left">
                    <div className="intro-left-wrapper">
                        <h3 className="intro-note">
                            Halo Amigo, My Name is
                        </h3>
                        <h2 className="intro-name">
                            Adenike Ruth Adeoye
                        </h2>
                        <div className="intro-title">
                            <div className="intro-title-wrapper">
                                <div className="intro-title-item">
                                    Public Health Practitioner
                                </div>
                                <div className="intro-title-item">
                                    Sexual And Reproductive Health Right (SRHR)
                                </div>
                                <div className="intro-title-item">
                                    Project Development
                                </div>
                                <div className="intro-title-item">
                                    Program Planning
                                </div>
                                <div className="intro-title-item">
                                    Monitoring and Evaluation
                                </div>
                                <div className="intro-title-item">
                                    Advocacy and Sensitization
                                </div>
                                <div className="intro-title-item">
                                    Research & Development
                                </div>
                            </div>
                        </div>
                        <div className="intro-description">
                            I have strong interest in Public Health with specific interest in sexual and reproductive health and right (SRHR) and the ability to educate, inform and empower adolescent and young people hence, promote the culture of consent to end culture of silence and stigma.
                        </div>
                        <div className="scroll-bar">
                            {/* <button className="btn-primary"> */}
                            <BsFillMouse2Fill className="i-scroll"/>
                            {/* </button> */}
                    </div>
                    </div>
                </div>
                <div className="intro-right">
                    <div className="intro-bg"></div>
                    <img src={hero} alt="Avatar" className="intro-img" /> 
                </div>
            </div>

        </>
    )
}

export default Intro
 