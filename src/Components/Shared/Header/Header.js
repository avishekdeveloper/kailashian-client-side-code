import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="mb-5">
            {/* Header Section */}
            <div data-w-id="8210e726-81bd-1b1b-93d3-da16a94ee6ff" className="sticky-header wf-section">
                <div className="home-page-text-container w-container">
                    <div className="h-info">
                        <div className="row">
                            <div className="col h-col-left"><img src="images/logo-NFLPA.png" loading="lazy" height="50" alt="" /></div>
                            <div className="col h-col-center">
                                <div className="h-title is--sm">GET YOUR KAILASHIAN DOLLARS NOW</div>
                            </div>
                            <div className="col h-col-right">
                                <div className="h-btn-wr">

                                    <Link to="/learn-more" className="h-btn w-button">Learn More</Link>
                                    {/* <a href="/learnMore.html" className="h-btn w-button">Learn More</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-collapse="medium" data-animation="default" data-duration="0" data-easing="ease" data-easing2="ease" role="banner" className="header-nav w-nav">
                <header className="header-nav-container w-container">
                    <Link to="/" aria-current="page" className="brand w-nav-brand w--current"><img src="images/logo01-02.png" alt="" className="logo" /></Link>
                    <div data-w-id="c366d7dd-fcab-d9b0-492f-06e7fdec49bc" className="menu-button w-nav-button"><img src="images/arrow.png" width="18" alt="" className="icon-menu" /></div>
                    <nav role="navigation" className="n-menu w-clearfix w-nav-menu">
                        <div data-hover="false" data-delay="0" className="dropdown-2 w-dropdown">
                            <div className="dropdown-nav-test w-dropdown-toggle">
                                <div className="down-arrow-icon w-icon-dropdown-toggle"></div>
                                <div className="text-block-nav">Guides &amp; Tutorials</div>
                            </div>
                            <nav className="dropdown-list w-dropdown-list">
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item"><span >
                                            <Link className="dropdown-link w-dropdown-link" to="/what-is-kailashian">What is Kailashian.com?</Link>
                                        </span></div>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/buying-island">Buying Island</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/selling-island">Selling Island</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/get-your-kailashian">Get Your Kailashian Dollars</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/earn-usd">Earn USD</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-col-li is--hidden w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/HowTotravel">How to Travel</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav-col-li is--hidden w-dyn-list">
                                    <div role="list" className="w-dyn-items">
                                        <div role="listitem" className="w-dyn-item">
                                            <Link className="dropdown-link w-dropdown-link" to="/AlcatrazJail">Alcatraz Jail</Link>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div data-hover="false" data-delay="0" className="dropdown-2 w-dropdown">
                            <div className="dropdown-nav-test w-dropdown-toggle">
                                <div className="down-arrow-icon w-icon-dropdown-toggle"></div>
                                <div className="text-block-nav">About Us</div>
                            </div>
                            <nav className="dropdown-list w-dropdown-list">
                                <Link className="dropdown-link w-dropdown-link" to="/about">About</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/roadmap">Roadmap</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/careers">Careers</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/branding">Branding</Link>

                            </nav>
                        </div>
                        <div data-hover="false" data-delay="0" className="dropdown-2 w-dropdown">
                            <div className="dropdown-nav-test w-dropdown-toggle">
                                <div className="down-arrow-icon w-icon-dropdown-toggle"></div>
                                <div className="text-block-nav">Community</div>
                            </div>
                            <nav className="dropdown-list w-dropdown-list">
                                <Link className="dropdown-link w-dropdown-link" to="/news">News</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/support">Support</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/telegram">Telegram</Link>

                            </nav>
                        </div>

                        <Link event_name="Root Website" className="nav-button w-nav-link" to="/get-your-kailashian">GET YOUR KAILASHIAN DOLLARS</Link>
                        {/* <a href="/getYour.html" event_name="Root Website" className="nav-button w-nav-link">GET YOUR KAILASHIAN DOLLARS</a> */}
                        <h3 className="nav-title-header-mob">Guides &amp; Tutorials</h3>
                        <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                                <div role="listitem" className="w-dyn-item"><a href="/what.html" className="nav-link-mobile w-nav-link">What is Kailashian.com?</a></div>
                            </div>
                        </div>
                        <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                                <div role="listitem" className="w-dyn-item"><a href="/buy.html" className="nav-link-mobile w-nav-link">Buying Island</a></div>
                            </div>
                        </div>
                        <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                                <div role="listitem" className="w-dyn-item"><a href="/sell.html" className="nav-link-mobile w-nav-link">Selling Island</a></div>
                            </div>
                        </div>
                        <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                                <div role="listitem" className="w-dyn-item"><a href="/getYour.html" className="nav-link-mobile w-nav-link">Get your Kailashian Dollars</a></div>
                            </div>
                        </div>
                        <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                                <div role="listitem" className="w-dyn-item"><a href="/earnUSD.html" className="nav-link-mobile w-nav-link">Earn USD</a></div>
                            </div>
                        </div>
                        <h3 className="nav-title-header-mob">About Us</h3>
                        <a href="/about.html" className="nav-link-mobile w-nav-link">About</a><a href="/roadmap.html" className="nav-link-mobile w-nav-link">Roadmap</a><a href="/careers.html" className="nav-link-mobile w-nav-link">Careers</a><a href="/branding.html" className="nav-link-mobile w-nav-link">Branding</a>
                        <h3 className="nav-title-header-mob">Community</h3>
                        <a href="/news.html" className="nav-link-mobile w-nav-link">News</a><a href="/support.html" className="nav-link-mobile w-nav-link">Support</a><a href="/telegram.html" className="nav-link-mobile w-nav-link">Telegram</a>
                    </nav>
                </header>
            </div>

            {/* <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark text-white">
                <div className="container bg-success ">
                    <a className="navbar-brand bg-success" href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Link
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                    <li><a className="dropdown-item" href="/">Action</a></li>
                                    <li><a className="dropdown-item" href="/">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="/">Something else here</a></li>
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