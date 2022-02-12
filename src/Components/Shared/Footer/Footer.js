import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
    return (
        <div>
            {/* <!-- Footer --> */}
            <div className="footer-nav wf-section py-5">
                {/* <div className="social-footer-container w-container">
                    <div>
                        <h3 className="followus-title">Follow us on</h3>
                    </div>
                    <div className="columns-4 w-row">
                        <div className="column-9 w-col w-col-7">
                            <div className="socials-footer w-row">
                                <div className="column-11 w-col w-col-1">

                                        <a href="https://discord.gg/BZsW2XcAen" target="_blank">

                                        <img src="images/icons8-discord.svg" alt="" className=" discord" />
                                        </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}



                <div className="footer-nav-contaner w-container">
                    <div className="columns-footer">
                        <div>
                            <h3 className="footer-title-header">Support</h3>
                            <div>
                                <ul className="w-list-unstyled">

                                    <li>
                                        <Link to="/Request" data-w-id="56cd482e-8a6b-4e62-ca9d-3968c71f20ee" className="footer-link">Submit
                                            Request</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="footer-title-header">About Us</h3>
                            <div>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/about">About</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/roadmap">Roadmap</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/careers">Careers</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/branding">Branding</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="footer-title-header">Community</h3>
                            <div>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/news">News</Link>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/support">Support</Link>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <a className='footer-link' href="https://discord.gg/BZsW2XcAen" target="_blank">Discord</a>
                                        {/* <Link className="footer-link" to="/Telegram">Telegram</Link> */}
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 className="footer-title-header">Legal</h3>
                            <div>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/terms-of-service">Terms of Service</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/privacy-policy">Privacy Policy</Link>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <ul className="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/disclaimer">Disclaimer</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-logo-container w-container">
                    <div className="footer-logo-div-block">
                        <Link to="/" aria-current="page" className="w-inline-block w--current">
                            <img src="images/logo01-02.png" alt="" className="image-43" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;