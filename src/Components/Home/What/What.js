import React from 'react';
import { Link } from 'react-router-dom';
import './What.css'

const What = () => {
    return (
        <div>

            <div className="events-tout wf-section">
                <div className="discord-home-container w-container">
                    <h1 className="join-the-conversation">What&#x27;s up in Kailashian</h1>
                    <div className="sub-copy">Keep track of all events and activities in the Kailashian metaverse!<br /></div>
                    <div className="upland-events-collections-home w-dyn-list">
                        <div role="list" className="collection-list-events-home w-dyn-items w-row d-flex justify-content-center"
                        >
                            <div role="listitem" className="collection-item-events w-clearfix w-dyn-item w-col w-col-4">
                                {/* <h1 className="live-badge w-dyn-bind-empty"></h1> */}
                                <img height="" loading="eager" src="images/xmas-slide01.png" alt="" className="events-img" />
                                <h2 className="time-events">December 25, 2021</h2>
                                <h2>Launch of Kailashian Dollars</h2>
                                <Link to="/learnMoreLaunchKD" className="primary-button-events w-button">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="div-block-button-events w-clearfix">
                        <Link to="/viewMoreEvent" className="primary-button w-button">view
                            more events</Link>
                    </div>
                </div>
            </div>
            <div className="discord-tout wf-section">
                <div className="discord-home-container w-container">
                    <h1 className="join-the-conversation">Join the Conversation</h1>
                    <div className="sub-copy">See what’s going on in the Kailashian universe. Get answers to your questions or advice on
                        advanced game strategy and connect with our community!<br /></div>
                    <div className="w-layout-grid socials ">
                        <a className="socials-links w-inline-block" href="https://discord.gg/BZsW2XcAen" target="_blank" >

                            <img src="images/new-discord.png" alt="" className=" discord-style img-fluid h-100" />
                        </a>
                        {/* <Link to="/Telegram" className="socials-links w-inline-block">
                            <img src="images/telegram-app.svg" alt="Telegram icon " className="socials-img" />
                        </Link> */}
                    </div>
                </div>
            </div>
            <div className="newsletter-section wf-section">
                <div className="newsletter-container w-container">
                    <div className="newsletter-column w-row">
                        <div className="column-3 w-col w-col-4">
                            <div className="form-block w-form">
                                <div id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" className="form w-clearfix">

                                    <Link to="/newsletter-signup" className="primary-button w-button">
                                        newsletter signup
                                    </Link>

                                </div>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default What;