import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';


const Header = () => {
    return (
        <div className="">

            {/* <div data-w-id="8210e726-81bd-1b1b-93d3-da16a94ee6ff" class="sticky-header wf-section">
                <div class="home-page-text-container w-container">
                    <div class="h-info">
                        <div class="row">
                            <div class="col h-col-left"><img src="images/logo-NFLPA.png" loading="lazy" height="50" alt="" /></div>
                            <div class="col h-col-center">
                                <div class="h-title is--sm">GET YOUR KAILASHIAN DOLLARS NOW</div>
                            </div>
                            <div class="col h-col-right">
                                <div class="h-btn-wr"><a href="/learnMore.html" class="h-btn w-button">Learn More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 


            {/* Header Section */}


            {/* <div data-w-id="8210e726-81bd-1b1b-93d3-da16a94ee6ff" className="sticky-header wf-section">
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
                                    <a href="/learnMore.html" className="h-btn w-button">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}



            {/* Real Part */}
            {/* <div data-collapse="medium" data-animation="default" data-duration="0" data-easing="ease" data-easing2="ease"
                role="banner" class="header-nav w-nav">
                <header class="header-nav-container w-container">
                    <a href="/index.html" aria-current="page" class="brand w-nav-brand w--current"><img src="images/logo01-02.png"
                        alt="" class="logo" /></a>
                    <div data-w-id="c366d7dd-fcab-d9b0-492f-06e7fdec49bc" class="menu-button w-nav-button"><img src="images/arrow.png"
                        width="18" alt="" class="icon-menu" /></div>
                    <nav role="navigation" class="n-menu w-clearfix w-nav-menu">
                        <div data-hover="false" data-delay="0" class="dropdown-2 w-dropdown">
                            <div class="dropdown-nav-test w-dropdown-toggle">
                                <div class="down-arrow-icon w-icon-dropdown-toggle"></div>
                                <div class="text-block-nav">Guides &amp; Tutorials</div>
                            </div>
                            <nav class="dropdown-list w-dropdown-list">
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="what.html" class="dropdown-link w-dropdown-link">What
                                            is Kailashian.com?</a></div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="/buy.html" class="dropdown-link w-dropdown-link">Buying
                                            Island</a></div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="/sell.html"
                                            class="dropdown-link w-dropdown-link">Selling Island</a></div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="/getYour.html"
                                            class="dropdown-link w-dropdown-link">Get Your Kailashian Dollars</a></div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="/earnUSD.html"
                                            class="dropdown-link w-dropdown-link">Earn USD</a></div>
                                    </div>
                                </div>
                                <div class="nav-col-li is--hidden w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="#!" class="dropdown-link w-dropdown-link">How to
                                            Travel</a></div>
                                    </div>
                                </div>
                                <div class="nav-col-li is--hidden w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="#!" class="dropdown-link w-dropdown-link">Alcatraz
                                            Jail</a></div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        <div data-hover="false" data-delay="0" class="dropdown-2 w-dropdown">
                            <div class="dropdown-nav-test w-dropdown-toggle">
                                <div class="down-arrow-icon w-icon-dropdown-toggle"></div>
                                <div class="text-block-nav">About Us</div>
                            </div>
                            <nav class="dropdown-list w-dropdown-list"><a href="/about.html"
                                class="dropdown-link w-dropdown-link">About</a><a href="/roadmap.html"
                                    class="dropdown-link w-dropdown-link">Roadmap</a><a href="/careers.html"
                                        class="dropdown-link w-dropdown-link">Careers</a><a href="branding.html"
                                            class="dropdown-link w-dropdown-link">Branding</a></nav>
                        </div>
                        <div data-hover="false" data-delay="0" class="dropdown-2 w-dropdown">
                            <div class="dropdown-nav-test w-dropdown-toggle">
                                <div class="down-arrow-icon w-icon-dropdown-toggle"></div>
                                <div class="text-block-nav">Community</div>
                            </div>
                            <nav class="dropdown-list w-dropdown-list"><a href="/news.html"
                                class="dropdown-link w-dropdown-link">News</a><a href="/support.html"
                                    class="dropdown-link w-dropdown-link">Support</a><a href="/telegram.html"
                                        class="dropdown-link w-dropdown-link">Telegram</a></nav>
                        </div>
                        <a href="/getYour.html" event_name="Root Website" class="nav-button w-nav-link">GET YOUR KAILASHIAN DOLLARS</a>
                        <h3 class="nav-title-header-mob">Guides &amp; Tutorials</h3>
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a href="/what.html" class="nav-link-mobile w-nav-link">What is
                                    Kailashian.com?</a></div>
                            </div>
                        </div>
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a href="/buy.html" class="nav-link-mobile w-nav-link">Buying
                                    Island</a></div>
                            </div>
                        </div>
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a href="/sell.html" class="nav-link-mobile w-nav-link">Selling
                                    Island</a></div>
                            </div>
                        </div>
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a href="/getYour.html" class="nav-link-mobile w-nav-link">Get your
                                    Kailashian Dollars</a></div>
                            </div>
                        </div>
                        <div class="w-dyn-list">
                            <div role="list" class="w-dyn-items">
                                <div role="listitem" class="w-dyn-item"><a href="/earnUSD.html" class="nav-link-mobile w-nav-link">Earn
                                    USD</a></div>
                            </div>
                        </div>
                        <h3 class="nav-title-header-mob">About Us</h3>
                        <a href="/about.html" class="nav-link-mobile w-nav-link">About</a><a href="/roadmap.html"
                            class="nav-link-mobile w-nav-link">Roadmap</a><a href="/careers.html"
                                class="nav-link-mobile w-nav-link">Careers</a><a href="/branding.html"
                                    class="nav-link-mobile w-nav-link">Branding</a>
                        <h3 class="nav-title-header-mob">Community</h3>
                        <a href="/news.html" class="nav-link-mobile w-nav-link">News</a><a href="/support.html"
                            class="nav-link-mobile w-nav-link">Support</a><a href="/telegram.html"
                                class="nav-link-mobile w-nav-link">Telegram</a>
                    </nav>
                </header>
            </div> */}

            {/* Real Part End */}

            {/* Error handling */}
            {/* <div data-collapse="medium" data-animation="default" data-duration="0" data-easing="ease" data-easing2="ease" role="banner" className="header-nav w-nav">
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
            </div> */}
            {/* Error handling */}

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

            <Navbar className="navbar-style" bg="dark" variant="dark" expand="lg" fixed="top">
                <Container>
                    <Link to="/" className="navbar-brand" >
                        <img src="images/logo01-02.png" alt="" className="logo" />
                    </Link>
                    {/* <Navbar.Brand href="#home">

                    </Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation"> */}
                        <img src="images/arrow.png" width="18" alt="" className="icon-menu" />
                        {/* </button> */}
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav" className='dropdown-style'>
                        {/* <Nav data-hover="false" data-delay="0" class="dropdown-2 w-dropdown">
                            <div class="dropdown-nav-test w-dropdown-toggle">
                                <div class="down-arrow-icon w-icon-dropdown-toggle"></div>
                                <div class="text-block-nav">Guides &amp; Tutorials</div>
                            </div>
                            <nav class="dropdown-list w-dropdown-list">
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="what.html" class="dropdown-link w-dropdown-link">What
                                            is Kailashian.com?</a></div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="/buy.html" class="dropdown-link w-dropdown-link">Buying
                                            Island</a></div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="/sell.html"
                                            class="dropdown-link w-dropdown-link">Selling Island</a></div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="/getYour.html"
                                            class="dropdown-link w-dropdown-link">Get Your Kailashian Dollars</a></div>
                                    </div>
                                </div>
                                <div class="w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="/earnUSD.html"
                                            class="dropdown-link w-dropdown-link">Earn USD</a></div>
                                    </div>
                                </div>
                                <div class="nav-col-li is--hidden w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="#!" class="dropdown-link w-dropdown-link">How to
                                            Travel</a></div>
                                    </div>
                                </div>
                                <div class="nav-col-li is--hidden w-dyn-list">
                                    <div role="list" class="w-dyn-items">
                                        <div role="listitem" class="w-dyn-item"><a href="#!" class="dropdown-link w-dropdown-link">Alcatraz
                                            Jail</a></div>
                                    </div>
                                </div>
                            </nav>
                        </Nav> */}
                        <Nav className="ms-auto me-auto">
                            {/* <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link> */}
                            {/* Menu One */}
                            {/* <div data-hover="false" data-delay="0" class="dropdown-2 w-dropdown">
                                <div class="dropdown-nav-test w-dropdown-toggle">
                                    <div class="down-arrow-icon w-icon-dropdown-toggle"></div>
                                    <div class="text-block-nav">Guides &amp; Tutorials</div>
                                </div>
                                <nav class="dropdown-list w-dropdown-list">
                                    <div class="w-dyn-list">
                                        <div role="list" class="w-dyn-items">
                                            <div role="listitem" class="w-dyn-item"><a href="what.html" class="dropdown-link w-dropdown-link">What
                                                is Kailashian.com?</a></div>
                                        </div>
                                    </div>
                                    <div class="w-dyn-list">
                                        <div role="list" class="w-dyn-items">
                                            <div role="listitem" class="w-dyn-item"><a href="/buy.html" class="dropdown-link w-dropdown-link">Buying
                                                Island</a></div>
                                        </div>
                                    </div>
                                    <div class="w-dyn-list">
                                        <div role="list" class="w-dyn-items">
                                            <div role="listitem" class="w-dyn-item"><a href="/sell.html"
                                                class="dropdown-link w-dropdown-link">Selling Island</a></div>
                                        </div>
                                    </div>
                                    <div class="w-dyn-list">
                                        <div role="list" class="w-dyn-items">
                                            <div role="listitem" class="w-dyn-item"><a href="/getYour.html"
                                                class="dropdown-link w-dropdown-link">Get Your Kailashian Dollars</a></div>
                                        </div>
                                    </div>
                                    <div class="w-dyn-list">
                                        <div role="list" class="w-dyn-items">
                                            <div role="listitem" class="w-dyn-item"><a href="/earnUSD.html"
                                                class="dropdown-link w-dropdown-link">Earn USD</a></div>
                                        </div>
                                    </div>
                                    <div class="nav-col-li is--hidden w-dyn-list">
                                        <div role="list" class="w-dyn-items">
                                            <div role="listitem" class="w-dyn-item"><a href="#!" class="dropdown-link w-dropdown-link">How to
                                                Travel</a></div>
                                        </div>
                                    </div>
                                    <div class="nav-col-li is--hidden w-dyn-list">
                                        <div role="list" class="w-dyn-items">
                                            <div role="listitem" class="w-dyn-item"><a href="#!" class="dropdown-link w-dropdown-link">Alcatraz
                                                Jail</a></div>
                                        </div>
                                    </div>
                                </nav>
                            </div> */}
                            {/* Menu One */}


                            {/* Menu Two */}
                            <div data-hover="false" data-delay="0" className="dropdown-2 w-dropdown">
                                <div className="dropdown-nav-test w-dropdown-toggle">
                                    <div className="down-arrow-icon w-icon-dropdown-toggle"></div>
                                    <div className="text-block-nav">Guides &amp; Tutorials</div>
                                </div>
                                <nav className="dropdown-list w-dropdown-list">

                                    <Link className="dropdown-link w-dropdown-link" to="/what-is-kailashian">What is Kailashian.com?</Link>
                                    <Link className="dropdown-link w-dropdown-link" to="/buying-island">Buying Island</Link>
                                    <Link className="dropdown-link w-dropdown-link" to="/selling-island">Selling Island</Link>
                                    <Link className="dropdown-link w-dropdown-link" to="/get-your-kailashian">Get Your Kailashian Dollars</Link>
                                    <Link className="dropdown-link w-dropdown-link" to="/earn-usd">Earn USD</Link>

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



                            {/* Menu Two */}


                            {/* Menu Three */}

                            {/* Menu Three */}
                            {/* <Link event_name="Root Website" className="nav-button w-nav-link" to="/get-your-kailashian">GET YOUR KAILASHIAN DOLLARS</Link>
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
                    </div>
                </div> */}

                            {/* Menu Two */}


                            {/* <NavDropdown className="mt-auto mb-auto m-auto" title="My Profile" >
                                <NavDropdown.Item as={Link} to="/home" className="text-white"><h6 className="m-auto">user.displayName</h6></NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addnewservice" className="">Add New Service</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/myorders" className="">My Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/manageAllOrders" className="">Manage All Orders</NavDropdown.Item>

                            </NavDropdown> */}
                            {/* <div class="nav-item dropdown ">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </div> */}
                            <NavDropdown className="text-white" title="Guides &amp; Tutorials" id="basic-nav-dropdown">

                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

                            </NavDropdown>

                            <NavDropdown className="text-white" title="About Us" id="basic-nav-dropdown">

                                <NavDropdown.Item href="#action/3.1">
                                    <Nav.Link className="nav-link bg-white text-dark" as={Link} to="/about">About</Nav.Link>
                                    {/* <Link className="nav-link bg-white text-dark" to="/about">About</Link> */}
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <Nav.Link className="nav-link bg-white text-dark" as={Link} to="/roadmap">Roadmap</Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <Nav.Link className="nav-link bg-white text-dark" as={Link} to="/careers">Careers</Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    <Nav.Link className="nav-link bg-white text-dark" as={Link} to="/branding">Branding</Nav.Link>
                                </NavDropdown.Item>


                            </NavDropdown>




                            <NavDropdown className="text-white" title="Community" id="basic-nav-dropdown">

                                {/* <Link className="dropdown-link w-dropdown-link" to="/news">News</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/support">Support</Link>
                                <Link className="dropdown-link w-dropdown-link" to="/telegram">Telegram</Link> */}
                                <NavDropdown.Item href="#action/3.1">
                                    <Nav.Link className="nav-link bg-white text-dark" as={Link} to="/news">News</Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    <Nav.Link className="nav-link bg-white text-dark" as={Link} to="/support">Support</Nav.Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    <Nav.Link className="nav-link bg-white text-dark" as={Link} to="/telegram">Telegram</Nav.Link>
                                </NavDropdown.Item>

                            </NavDropdown>


                        </Nav>

                        <Nav className="ms-auto me-auto">
                            <Nav.Link event_name="Root Website" className="nav-button w-nav-link text-white" as={Link} to="/get-your-kailashian">GET YOUR KAILASHIAN DOLLARS</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container >
            </Navbar >

            {/* <Navbar bg="primary" style={{marginTop: '9vh'}} fixed="top" variant="primary" expand="lg"> */}
            <Container fluid className="bg-primary text-white">
                <Container>
                    <div className="row justify-content-center align-items-center mx-auto w-75">
                        <div className="col"><img src="images/logo-NFLPA.png" loading="lazy" height="50" alt="" /></div>
                        <div className="col title-sm-style">
                            <div className="h-title is--sm">GET YOUR KAILASHIAN DOLLARS NOW</div>
                        </div>
                        <div className="col d-flex">
                            <div className="h-btn-wr ms-auto">
                                <Link to="/learn-more" className="h-btn w-button ms-auto px-2">Learn More</Link>
                                {/* <a href="/learnMore.html" className="h-btn w-button">Learn More</a> */}
                            </div>
                        </div>
                    </div>
                </Container>
            </Container>
            {/* </Navbar> */}
            {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container">

                    <a class="navbar-brand" href="#">
                        <img src="images/logo01-02.png" alt="" className="logo" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                      
                        <img src="images/arrow.png" width="18" alt="" className="icon-menu" />
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                            <li>
                                <Link event_name="Root Website" className="nav-button w-nav-link" to="/get-your-kailashian">GET YOUR KAILASHIAN DOLLARS</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav> */}
        </div >
    );
};

export default Header;