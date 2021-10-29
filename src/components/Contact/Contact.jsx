import './Contact.css';
import { BsFillEnvelopeOpenFill } from 'react-icons/bs';
import { BiCurrentLocation, BiPhone } from 'react-icons/bi';
import { useRef } from 'react';

const Contact = () => {
    const formRef = useRef;

    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">
                        Let's Discuss That Issue
                    </h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <i><BiPhone className="c-icon" /></i><span>+2348167970545</span>
                        </div>
                        <div className="contact-info-item">
                            <i><BsFillEnvelopeOpenFill className="c-icon" /></i> <span>adenikegifty@gmail.com</span>
                        </div>
                        <div className="contact-info-item">
                            <i><BiCurrentLocation className="c-icon" /></i><span>GRA, Ibadan Oyo State, Nigeria</span>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-desc">
                        <p>
                            <strong>What's your story, area of research?</strong>I am a button away. 
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder="Enter Your Name" name="user_name" />
                            <input type="text" placeholder="Subject" name="user_subject" />
                            <input type="email" placeholder="Enter Your Email" name="user_email" />
                            <textarea name="message" subject="Enter your message" id="textarea" cols="30" rows="10"></textarea>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
