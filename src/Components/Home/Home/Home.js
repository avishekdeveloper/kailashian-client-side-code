import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Faq from '../FAQ/Faq';
import Main from '../Main/Main';
import Slider from '../Slider/Slider';
import What from '../What/What';
import './Home.css'
const Home = () => {
    return (
        <div>
            {/* <Header></Header> */}
            <Slider></Slider>
            <Main></Main>
            <Faq></Faq>
            <What></What>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;