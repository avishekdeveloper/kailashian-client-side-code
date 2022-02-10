import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="mb-5">
            {/* Header Section */}
            <div data-w-id="8210e726-81bd-1b1b-93d3-da16a94ee6ff" class="sticky-header wf-section">
                <div class="home-page-text-container w-container">
                    <div class="h-info">
                        <div class="row">
                            <div class="col h-col-left"><img src="images/logo-NFLPA.png" loading="lazy" height="50" alt="" /></div>
                            <div class="col h-col-center">
                                <div class="h-title is--sm">GET YOUR KAILASHIAN DOLLARS NOW</div>
                            </div>
                            <div class="col h-col-right">
                                <div class="h-btn-wr">

                                    <Link to="/learnMore" class="h-btn w-button">Learn More</Link>
                                    {/* <a href="/learnMore.html" class="h-btn w-button">Learn More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-collapse="medium" data-animation="default" data-duration="0" data-easing="ease" data-easing2="ease" role="banner" class="header-nav w-nav">
                <header class="header-nav-container w-container">
                    <Link to="/" aria-current="page" class="brand w-nav-brand w--current"><img src="images/logo01-02.png" alt="" class="logo" /></Link>
                    <div data-w-id="c366d7dd-fcab-d9b0-492f-06e7fdec49bc" class="menu-button w-nav-button"><img src="images/arrow.png" width="18" alt="" class="icon-menu" /></div>
                    <nav role="navigation" class="n-menu w-clearfix w-nav-menu">
                        <div data-hover="false" data-delay="0" class="dropdown-2 w-dropdown">
                            <div class="dropdown-nav-test w-dropdown-toggle">
                                <div class="down-arrow-icon w-icon-dropdown-toggle"></div>
                                <div class="text-block-nav">Guides &amp; Tutorials</div>
                            </div>
                            <nav class="dropdown-list w-dropdown-list">
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><span >
                                            <Link className="dropdown-link w-dropdown-link" to="/whatis">What is Kailashian.com?</Link>
                                        </span></div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/buy">Buying Island</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/sell">Selling Island</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/getYour">Get Your Kailashian Dollars</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/earnUSD">Earn USD</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="nav-col-li is--hidden w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/HowTotravel">How to Travel</Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="nav-col-li is--hidden w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/AlcatrazJail">Alcatraz Jail</Link>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div data-hover="false" data-delay="0" class="dropdown-2 w-dropdown">
                            <div class="dropdown-nav-test w-dropdown-toggle">
                                <div class="down-arrow-icon w-icon-dropdown-toggle"></div>
                                <div class="text-block-nav">About Us</div>
                            </div>
                            <nav class="dropdown-list w-dropdown-list">
                                <Link className="dropdown-link w-dropdown-link" to="/About">About</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/Roadmap">Roadmap</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/Careers">Careers</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/Branding">Branding</Link>

                            </nav>
                        </div>
                        <div data-hover="false" data-delay="0" class="dropdown-2 w-dropdown">
                            <div class="dropdown-nav-test w-dropdown-toggle">
                                <div class="down-arrow-icon w-icon-dropdown-toggle"></div>
                                <div class="text-block-nav">Community</div>
                            </div>
                            <nav class="dropdown-list w-dropdown-list">
                                <Link className="dropdown-link w-dropdown-link" to="/News">News</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/Support">Support</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/Telegram">Telegram</Link>

                            </nav>
                        </div>

                        <Link event_name="Root Website" className="nav-button w-nav-link" to="/getYour">GET YOUR KAILASHIAN DOLLARS</Link>
                        {/* <a href="/getYour.html" event_name="Root Website" class="nav-button w-nav-link">GET YOUR KAILASHIAN DOLLARS</a> */}
                        <h3 class="nav-title-header-mob">Guides &amp; Tutorials</h3>
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a href="/what.html" class="nav-link-mobile w-nav-link">What is Kailashian.com?</a></div>
                            </div>
                        </div>
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a href="/buy.html" class="nav-link-mobile w-nav-link">Buying Island</a></div>
                            </div>
                        </div>
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a href="/sell.html" class="nav-link-mobile w-nav-link">Selling Island</a></div>
                            </div>
                        </div>
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a href="/getYour.html" class="nav-link-mobile w-nav-link">Get your Kailashian Dollars</a></div>
                            </div>
                        </div>
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a href="/earnUSD.html" class="nav-link-mobile w-nav-link">Earn USD</a></div>
                            </div>
                        </div>
                        <h3 class="nav-title-header-mob">About Us</h3>
                        <a href="/about.html" class="nav-link-mobile w-nav-link">About</a><a href="/roadmap.html" class="nav-link-mobile w-nav-link">Roadmap</a><a href="/careers.html" class="nav-link-mobile w-nav-link">Careers</a><a href="/branding.html" class="nav-link-mobile w-nav-link">Branding</a>
                        <h3 class="nav-title-header-mob">Community</h3>
                        <a href="/news.html" class="nav-link-mobile w-nav-link">News</a><a href="/support.html" class="nav-link-mobile w-nav-link">Support</a><a href="/telegram.html" class="nav-link-mobile w-nav-link">Telegram</a>
                    </nav>
                </header>
            </div>

            {/* <nav class="container-fluid navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div class="container bg-success ">
                    <a class="navbar-brand bg-success" href="/">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Link
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a class="dropdown-item" href="/">Action</a></li>
                                    <li><a class="dropdown-item" href="/">Another action</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>





            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container className="d-flex justify-content-center align-item-center">
                    <Navbar.Brand href="#home" className="ms-auto">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className='d-inline bg-warning '>
                        <Nav className="ms-auto">
                            <Nav.Link href="/">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <Nav.Link className="nav-text ms-3 " to='/'>Home</Nav.Link>
                            <NavDropdown className="text-white" title="Dropdown" id="collasible-nav-dropdown">

                            </NavDropdown>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
 */}

        </div>
    );
};

export default Header;