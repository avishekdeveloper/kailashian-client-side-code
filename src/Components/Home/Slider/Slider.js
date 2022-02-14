import React from 'react';
import { Link } from 'react-router-dom';
// import Splide from '@splidejs/splide';
import './Slider.css';

const Slider = () => {


    // new Splide('.splide').mount();
    return (
        <div className="">

           
            <div id="carouselExampleControls" className="carousel " data-bs-ride="carousel">

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="images/slide01.png" className="d-md-block d-none h-100 w-100" alt="..." />
                        <img src="images/slide01-m.jpeg" className="d-md-none d-sm-block small-img img-fuild" alt="..." />
                        <div className="container container-extra slider-content-new-style  ">
                            <div className="carousel-caption  text-start slider-content-style   ">
                                <h2 className="header-headline-slider slider-caption-style">KAILASHIAN IS THE NEXT BIG THING IN THE METAVERSE</h2>

                                <Link to="/what-is-kailashian">
                                    <div className="div-block-64 w-clearfix">
                                        <span data-event-category="Enter Upland Button" className="slider-main-button primary-button-big ga-event w-button">Join the Metaverse</span>
                                    </div>
                                </Link>
                                {/* <div className="div-block-64 w-clearfix"><Link to="/joinMeta.html" data-event-category="Enter Upland Button" className="primary-button-big ga-event w-button">Join the Metaverse</Link></div> */}
                                {/* <div className=" div-block-64 w-clearfix"><Link to="/what-is-kailashian" data-event-category="Enter Upland Button" className="slider-main-button primary-button-big ga-event w-button">Join the Metaverse</Link></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/slide01.png" className="d-md-block d-none h-100 w-100" alt="..." />
                        <img src="images/slide01-m.jpeg" className="d-md-none d-sm-block small-img img-fuild" alt="..." />
                        <div className="container container-extra slider-content-new-style ">
                            <div className="carousel-caption  text-start slider-content-style  ">
                                <h2 className="header-headline-slider slider-caption-style">KAILASHIAN IS THE NEXT BIG THING IN THE METAVERSE</h2>

                                <Link to="/what-is-kailashian">
                                    <div className="div-block-64 w-clearfix">
                                        <span data-event-category="Enter Upland Button" className="slider-main-button primary-button-big ga-event w-button">Join the Metaverse</span>
                                    </div>
                                </Link>
                              
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="images/slide01.png" className="d-md-block d-none h-100 w-100" alt="..." />
                        <img src="images/slide01-m.jpeg" className="d-md-none d-sm-block small-img img-fuild" alt="..." />
                        <div className="container container-extra slider-content-new-style ">
                            <div className="carousel-caption  text-start slider-content-style   ">
                                <h2 className="header-headline-slider slider-caption-style">KAILASHIAN IS THE NEXT BIG THING IN THE METAVERSE</h2>
                                <Link to="/what-is-kailashian">
                                    <div className="div-block-64 w-clearfix">
                                        <span data-event-category="Enter Upland Button" className="nav-button slider-main-button primary-button-big ga-event w-button">Join the Metaverse</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>


        </div >
    );
};

export default Slider;