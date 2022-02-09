import React from 'react';
import { Nav, NavLink } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './sam/css/hover-min.css'
import './sam/css/style.css'
import ds from './sam/images/DSL.png'
import './TemporaryHome.css'


const TemporaryHome = () => {

    return (
        <div class="bg-dark ">

            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="/"> </a> to improve your experience.</p>
            
            <nav class="navbar">
                <div class="container">
                    <a class="navbar-brand mr-auto" rel="norefferer" href="https://dslegends.org/" >
                        <img src={ds} alt="DS Legends Logo" style={{ width: "200px" }} />
                    </a>
                </div>
            </nav>

            <NavLink to={`/users`} className="link-light"> </NavLink>
            <div class="container text-white text-left">
                <div class="row" id="underMaintenanceRow">
                    <div class="col-md-12">
                        <p>NFT Marketplaces under development by DSL</p>
                        <p>1. <a href="https://videonft.sg/" class="text-white" target="_blank">videonft.sg</a> : A BSC NFT marketplace where any video can be converted into NFT.</p>
                        <p>2. <a href="https://physicalnft.org/" class="text-white" target="_blank">physicalnft.org</a>: A BSC NFT marketplace where anything valuable can be converted into a NFT.</p>
                        <p>3. <a href="https://kailashian.com/" class="text-white" target="_blank">kailashian.com</a>: A BSC Metaverse Project which consists of Digital Payment Tokens, Man-Made Island NFTs and Virtual Reality Videos.</p>
                        <p>4. <a href="https://grighund.net/" class="text-white" target="_blank">grighund.net</a>: A BSC Metaverse Project which consists of Grey Hound Racing Dogs and Virtual Reality Videos.</p>
                        <p>5. <a href="https://blockchainsdomain.com/" class="text-white" target="_blank">blockchainsdomain.com</a>: A NFT marketplace for Blockchain Domains from BSC.</p>
                    </div>
                </div>
                <div class="row pt-3" id="contactusRow">
                    <div class="col-md-12">
                        <h4 id="contactUsTitle">contact us</h4>
                        <ul class="nav text-center" id="contactNav">

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TemporaryHome;