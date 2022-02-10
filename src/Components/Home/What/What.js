import React from 'react';
import { Link } from 'react-router-dom';

const What = () => {
    return (
        <div>

            <div class="events-tout wf-section">
                <div class="discord-home-container w-container">
                    <h1 class="join-the-conversation">What&#x27;s up in Kailashian</h1>
                    <div class="sub-copy">Keep track of all events and activities in the Kailashian metaverse!<br /></div>
                    <div class="upland-events-collections-home w-dyn-list">
                        <div role="list" className="collection-list-events-home w-dyn-items w-row d-flex justify-content-center"
                        >
                            <div role="listitem" class="collection-item-events w-clearfix w-dyn-item w-col w-col-4">
                                {/* <h1 className="live-badge w-dyn-bind-empty"></h1> */}
                                <img height="" loading="eager" src="images/xmas-slide01.png" alt="" class="events-img" />
                                <h2 class="time-events">December 25, 2021</h2>
                                <h2>Launch of Kailashian Dollars</h2>
                                <Link to="/learnMoreLaunchKD" class="primary-button-events w-button">Learn more</Link>
                            </div>
                        </div>
                    </div>
                    <div class="div-block-button-events w-clearfix">
                        <Link to="/viewMoreEvent" class="primary-button w-button">view
                            more events</Link>
                    </div>
                </div>
            </div>
            <div class="discord-tout wf-section">
                <div class="discord-home-container w-container">
                    <h1 class="join-the-conversation">Join the Conversation</h1>
                    <div class="sub-copy">See what’s going on in the Kailashian universe. Get answers to your questions or advice on
                        advanced game strategy and connect with our community!<br /></div>
                    <div class="w-layout-grid socials">
                        <Link tor="Telegram" class="socials-links w-inline-block">
                            <img src="images/telegram-app.svg" alt="Telegram icon " class="socials-img" />
                        </Link>
                    </div>
                </div>
            </div>
            <div class="newsletter-section wf-section">
                <div class="newsletter-container w-container">
                    <div class="newsletter-column w-row">
                        <div class="column-3 w-col w-col-4">
                            <div class="form-block w-form">
                                <form id="wf-form-Email-Form" name="wf-form-Email-Form" data-name="Email Form" class="form w-clearfix"><a
                                    href="/newsletter.html" class="primary-button w-button">newsletter signup</a></form>
                                <div class="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div class="w-form-fail">
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