import React from 'react';

const Slider = () => {
    return (
        <div>
            <div class="splide-wr">
                <div class="splide slider1">
                    <div class="splide__track w-dyn-list">
                        <div role="list" class="splide__list w-dyn-items">
                            <div role="listitem" class="splide__slide w-dyn-item">
                                <div class="slider-this-is-copied-to-slide is--home">
                                    <div class="header-section-content is--home w-container">
                                        {/* <!-- <img src="images/logo01-02.png" loading="lazy" alt="" class="hc-logo" /> --> */}
                                        <h1 class="header-headline-slider">KAILASHIAN IS THE NEXT BIG THING IN THE PARALLEL WORLD</h1>
                                        <div data-hover="false" data-delay="0" class="dropdown-enterupland-slider w-dropdown">
                                            <div class="dropdown-toggle-3 w-dropdown-toggle">
                                                <div class="text-block-18">Enter upland</div>
                                            </div>
                                            <nav class="dropdown-list-on-play-button w-clearfix w-dropdown-list"><a href="#!" class="primary-button w-button">Open in web</a><a href="#!" class="badge-link w-inline-block"><img src="images/Google Play Badge.svg" alt="Download Upland on Google Play!" class="badge-image-copy" /></a><a href="#!" class="badge-link w-inline-block"><img src="images/App Store Badge.svg" alt="" class="badge-image" /></a></nav>
                                        </div>
                                        <div class="header-ctas-2">
                                            <div class="div-block-64 w-clearfix"><a href="/joinMeta.html" data-event-category="Enter Upland Button" class="primary-button-big ga-event w-button">Join the Metaverse</a></div>
                                        </div>
                                        <div class="header-ctas-2-mobile">
                                            <div class="mobile-enter-upland w-clearfix"><a href="/joinMeta.html" class="primary-button w-button">Join the Metaverse</a></div>
                                            <div class="header-ctas-2">
                                                <div class="w-clearfix"><a href="#!" event_name="Root Website" class="primary-button-big ga-event w-button">Enter Upland</a></div>
                                            </div>
                                            <div class="header-ctas-2">
                                                <div class="w-clearfix"><a href="#!" event_name="Root Website" class="primary-button-big ga-event w-button">Enter Upland</a></div>
                                            </div>
                                        </div>
                                    </div>
                                    <img src="images/slide01.png" loading="lazy" alt="" sizes="100vw" class="slider-bg-img" />
                                </div>
                                <div class="slider-this-is-copied-to-slide is--home is--mob">
                                    <img src="images/slide01-m.jpeg" loading="lazy" alt="" class="slider-bg-img" />
                                    <div class="header-section-content is--home w-container">
                                        <h1 class="header-headline-slider">KAILASHIAN IS THE NEXT BIG THING IN THE PARALLEL WORLD</h1>
                                        <div data-hover="false" data-delay="0" class="dropdown-enterupland-slider w-dropdown">
                                            <div class="dropdown-toggle-3 w-dropdown-toggle">
                                                <div class="text-block-18">Enter upland</div>
                                            </div>
                                        </div>
                                        <div class="header-ctas-2">
                                            <div class="div-block-64 w-clearfix"><a href="/joinMeta.html" data-event-category="Enter Upland Button" class="primary-button-big ga-event w-button">Join the Metaverse</a></div>
                                        </div>
                                        <div class="header-ctas-2-mobile">
                                            <div class="mobile-enter-upland w-clearfix"><a href="/joinMeta.html" class="primary-button w-button">Join the Metaverse</a></div>
                                            <div class="header-ctas-2">
                                                <div class="w-clearfix"><a href="#!" event_name="Root Website" class="primary-button-big ga-event w-button">Enter Upland</a></div>
                                            </div>
                                            <div class="header-ctas-2">
                                                <div class="w-clearfix"><a href="#!" event_name="Root Website" class="primary-button-big ga-event w-button">Enter Upland</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="splide__arrows">
                        <div class="splide__embed w-embed"><button class="splide__arrow splide__arrow--prev"></button></div>
                        <div class="splide__embed is--right w-embed"><button class="splide__arrow splide__arrow--next"></button></div>
                        <div class="splide__arrow is--styleguide"></div>
                    </div>
                    <ul role="list" class="splide__pagination">
                        <li class="pagination_item">
                            <div class="splide__pagination-page"></div>
                        </li>
                        <li class="pagination_item">
                            <div class="splide__pagination-page is--active"></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Slider;