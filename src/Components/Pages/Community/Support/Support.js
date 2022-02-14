import React from 'react';
import { Button } from 'react-bootstrap';
import emailjs from "emailjs-com";
import './Support.css'
import { useForm, ValidationError } from '@formspree/react';
import { Link, NavLink } from 'react-router-dom';
const Support = () => {

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
    const [state, handleSubmit] = useForm("xqknqaqq");
    if (state.succeeded) {
        return (
            <div className="py-5 d-flex justify-content-center align-items-center flex-column">

                <h1 className="my-5">Thanks for your response</h1>
                {/* <Button className=""> */}
                {/* <Link className="text-white nav-link btn-dark rounded-pill" to="/support"> Get back to support </Link> */}
                {/* </Button> */}
                <Link className="text-white nav-link btn-success my-2 rounded-pill" to="/"> Home </Link>
                {/* <NavLink exact activeClassName="active" to="/" className="dashboard-tabs  my-5"><Button >Home</Button></NavLink> */}
                {/* <Button className="btn-success"> 
                    <Link to="/support"> Get back to Home </Link>
                </Button> */}
            </div>
        )
    }
    return (
        <div className="py-5">

            <div className="about-us-section ">
                <h1>Support</h1>
            </div>

            {/* <div className="container w-container">
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
            </div> */}


            {/* <div className="container w-container">
                <div className="py-5">
                    <h2 className="pb-4 text-white">Get in touch with us</h2>
                    <form onSubmit="https://formspree.io/f/xqknqaqq" method="POST" className="submit-request">
                        <input id="email" type="text" name="name" placeholder="Your Name" className="mb-3 text-field input" />
                        <input type="email" name="email" placeholder="Your Email" className="mb-3 text-field input" />
                        <input type="text" name="subject" placeholder="Subject" className="mb-3 text-field input" />
                        <textarea type="email" name="message" placeholder="Message" className="mb-3 text-field textarea" />
                        <Button type="submit" className="send-btn btn btn-primary ">Send Message</Button>
                    </form>

                </div>
            </div> */}
            <div className="container w-container">
                <div className="py-5">
                    <h2 className="pb-4 text-white">Get in touch with us</h2>
                    <form onSubmit={handleSubmit} className="submit-request">
                        <input id="email" type="text" name="name" placeholder="Your Name" className="mb-3 text-field input" />
                        <input
                            placeholder="Your Email" className="mb-3 text-field input"
                            id="email"
                            type="email"
                            name="email"
                        />
                        <ValidationError
                            prefix="Email"
                            field="email"
                            errors={state.errors}
                        />
                        <input type="text" name="subject" placeholder="Subject" className="mb-3 text-field input" />
                        <textarea
                            placeholder="Message" className="mb-3 text-field textarea"
                            id="message"
                            name="message"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                        <button
                            className="send-btn btn btn-primary "
                            type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Support;