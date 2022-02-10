import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer --> */}
            <div class="footer-nav wf-section">
                <div class="social-footer-container w-container">
                    <div>
                        <h3 class="followus-title">Follow us on</h3>
                    </div>
                    <div class="columns-4 w-row">
                        <div class="column-9 w-col w-col-7">
                            <div class="socials-footer w-row">
                                <div class="column-11 w-col w-col-1">

                                    <Link to="/Telegram" class="w-inline-block">
                                        <img src="images/iconmonstr-telegram-1.svg" alt="" class="telegram" />
                                    </Link>
                                </div>
                                <div class="column-13 w-col w-col-7"></div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="footer-nav-contaner w-container">
                    <div class="columns-footer">
                        <div>
                            <h3 class="footer-title-header">Support</h3>
                            <div>
                                <ul class="w-list-unstyled">

                                    <li>
                                        <Link to="/Request" data-w-id="56cd482e-8a6b-4e62-ca9d-3968c71f20ee" class="footer-link">Submit
                                            Request</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 class="footer-title-header">About Us</h3>
                            <div>
                                <ul class="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/About">About</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/Roadmap">Roadmap</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/Careers">Careers</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/Branding">Branding</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 class="footer-title-header">Community</h3>
                            <div>
                                <ul class="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/News">News</Link>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <ul class="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/Support">Support</Link>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <ul class="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/Telegram">Telegram</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div>
                            <h3 class="footer-title-header">Legal</h3>
                            <div>
                                <ul class="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/Terms">Terms of Service</Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul class="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/Privacy">Privacy Policy</Link>
                                    </li>

                                </ul>
                            </div>
                            <div>
                                <ul class="w-list-unstyled">
                                    <li>
                                        <Link className="footer-link" to="/Disclaimer">Disclaimer</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-logo-container w-container">
                    <div class="footer-logo-div-block">
                        <Link to="/" aria-current="page" class="w-inline-block w--current">
                            <img src="images/logo01-02.png" alt="" class="image-43" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;