import React from 'react';

import Faq from '../FAQ/Faq';
import Main from '../Main/Main';
import Slider from '../Slider/Slider';
import What from '../What/What';
import './Home.css'
const Home = () => {
    return (
        <div>
            
            <Slider></Slider>
            <Main></Main>
            <Faq></Faq>
            <What></What>
            
        </div>
    );
};

export default Home;