import React from 'react';
import Header from '../../Shared/Header/Header';
import Main from '../Main/Main';
import Slider from '../Slider/Slider';
import './Home.css'
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Main></Main>
        </div>
    );
};

export default Home;