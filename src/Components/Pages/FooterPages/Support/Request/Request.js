import React from 'react';
import emailjs from "emailjs-com";
import './Request.css'
import { Button } from 'react-bootstrap';


const Request = () => {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_x0gr6ph', 'template_azdl1zp', e.target, 'user_ipHIMZB9pDML4LhAreiIo')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <div className="py-5">
            <div className="about-us-section ">
                <h1>Submit Request</h1>

                    <div className="container w-container">
                        <div className="py-5">
                            <h2 className="pb-4 text-white">Get in touch with us</h2>
                            <form onSubmit={sendEmail} className="submit-request">
                                <input type="text" name="name" placeholder="Your Name" className="mb-3 text-field input" />
                                <input type="email" name="email" placeholder="Your Email" className="mb-3 text-field input" />
                                <input type="text" name="subject" placeholder="Subject" className="mb-3 text-field input" />
                                <textarea type="email" name="message" placeholder="Message" className="mb-3 text-field textarea" />
                                <Button type="submit"

                                    className="send-btn btn btn-primary ">Send Message</Button>
                            </form>

                        </div>
                    </div>

                </div>
            </div>
        
    );
};

export default Request;