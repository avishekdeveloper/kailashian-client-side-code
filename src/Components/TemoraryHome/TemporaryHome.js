import React from 'react';
import {  NavLink } from 'react-bootstrap';

import './sam/css/hover-min.css'
import './sam/css/style.css'
import ds from './sam/images/DSL.png'
import './TemporaryHome.css'


const TemporaryHome = () => {

    return (
        <div className="bg-dark ">

            {/* <p className="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="/"> </a> to improve your experience.</p> */}

            <nav className="py-3">
                <div className="container">
                    <a className="navbar-brand mr-auto" rel="norefferer" href="https://dslegends.org/" >
                        <img src={ds} alt="DS Legends Logo" style={{ width: "200px" }} />
                    </a>
                </div>
            </nav>

            <NavLink to={`/users`} className="link-light"> </NavLink>
            <div className="container text-white text-left">
                <div className="row py-5" id="">
                    <div className="col-md-12">
                        <p>NFT Marketplaces under development by DSL</p>
                        <p>1. <a href="https://videonft.sg/" className="text-white" target="_blank" rel="noreferrer" >videonft.sg</a> : A BSC NFT marketplace where any video can be converted into NFT.</p>
                        <p>2. <a href="https://physicalnft.org/" className="text-white" target="_blank" rel="noreferrer" >physicalnft.org</a>: A BSC NFT marketplace where anything valuable can be converted into a NFT.</p>
                        <p>3. <a href="https://kailashian.com/" className="text-white" target="_blank" rel="noreferrer" >kailashian.com</a>: A BSC Metaverse Project which consists of Digital Payment Tokens, Man-Made Island NFTs and Virtual Reality Videos.</p>
                        <p>4. <a href="https://grighund.net/" className="text-white" target="_blank" rel="noreferrer" >grighund.net</a>: A BSC Metaverse Project which consists of Grey Hound Racing Dogs and Virtual Reality Videos.</p>
                        <p>5. <a href="https://blockchainsdomain.com/" className="text-white" target="_blank" rel="noreferrer" >blockchainsdomain.com</a>: A NFT marketplace for Blockchain Domains from BSC.</p>
                    </div>
                </div>
                <div className="row " id="contactusRow">
                    <div className="col-md-12">
                        <h4 id="contactUsTitle" className='pb-1'>contact us</h4>
                        <ul className="nav text-center" id="contactNav">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemporaryHome;