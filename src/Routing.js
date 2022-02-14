import React from 'react';
import './App.css';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import TemporaryHome from './Components/TemoraryHome/TemporaryHome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import WhatIsK from './Components/Pages/Guide/WhatIsK/WhatIsK';
import BuyingIsland from './Components/Pages/Guide/BuyingIsland/BuyingIsland';
import SellingIsland from './Components/Pages/Guide/SellingIsland/SellingIsland';
import GetYour from './Components/Pages/Guide/GetYour/GetYour';
import EarnUSD from './Components/Pages/Guide/EarnUSD/EarnUSD';
import About from './Components/Pages/About/About/About';
import Roadmap from './Components/Pages/About/Roadmap/Roadmap';
import Careers from './Components/Pages/About/Careers/Careers';
import Branding from './Components/Pages/About/Branding/Branding';
import News from './Components/Pages/Community/News/News';
import Support from './Components/Pages/Community/Support/Support';
import Telegram from './Components/Pages/Community/Telegram/Telegram';
import Terms from './Components/Pages/FooterPages/Legal/Terms/Terms';
import Privacy from './Components/Pages/FooterPages/Legal/Privacy/Privacy';
import Disclaimer from './Components/Pages/FooterPages/Legal/Disclaimer/Disclaimer';
import LearnMore from './Components/Pages/SecondNav/LearnMore/LearnMore';
import Request from './Components/Pages/FooterPages/Support/Request/Request';
import MoreEvents from './Components/Pages/FooterPages/More/MoreEvents/MoreEvents';
import NewsLetter from './Components/Pages/FooterPages/More/NewsLetter/NewsLetter';
import Login from './Components/Login/Login/Login';
import SignUp from './Components/Login/SignUp/SignUp';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import NotFound from './Components/NotFound/NotFound'
import useAuth from './Hooks/useAuth';

const Routing = () => {
    const { user, admin, logOut } = useAuth();
    return (
        <div>
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/home">
                            <Home></Home>
                        </Route>


                        {/* Header */}
                        {/* Guides & Tutorials */}
                        <Route exact path="/what-is-kailashian">
                            <WhatIsK></WhatIsK>
                        </Route>
                        <Route exact path="/buying-island">
                            <BuyingIsland></BuyingIsland>
                        </Route>
                        <Route exact path="/selling-island">
                            <SellingIsland></SellingIsland>
                        </Route>
                        <Route exact path="/get-your-kailashian">
                            <GetYour></GetYour>
                        </Route>
                        <Route exact path="/earn-usd">
                            <EarnUSD></EarnUSD>
                        </Route>





                        {/* About Us */}
                        <Route exact path="/about">
                            <About></About>
                        </Route>
                        <Route exact path="/roadmap">
                            <Roadmap></Roadmap>
                        </Route>
                        <Route exact path="/careers">
                            <Careers></Careers>
                        </Route>
                        <Route exact path="/branding">
                            <Branding></Branding>
                        </Route>



                        {/* Community */}
                        <Route exact path="/news">
                            <News></News>
                        </Route>
                        <Route exact path="/support">
                            <Support></Support>
                        </Route>
                        <Route exact path="/telegram">
                            <Telegram></Telegram>
                        </Route>
                        <Route exact path="/get-your-kailashian">
                            <GetYour></GetYour>
                        </Route>
                        <Route exact path="/learn-more">
                            <LearnMore></LearnMore>
                        </Route>



                        {/* Footer */}
                        <Route exact path="/terms-of-service">
                            <Terms></Terms>
                        </Route>
                        <Route exact path="/privacy-policy">
                            <Privacy></Privacy>
                        </Route>
                        <Route exact path="/disclaimer">
                            <Disclaimer></Disclaimer>
                        </Route>
                        <Route exact path="/Request">
                            <Request></Request>
                        </Route>



                        {/* What section */}
                        <Route exact path="/learnMoreLaunchKD">
                            <LearnMore></LearnMore>
                        </Route>
                        <Route exact path="/viewMoreEvent">
                            <MoreEvents></MoreEvents>
                        </Route>
                        <Route exact path="/newsletter-signup">
                            <NewsLetter></NewsLetter>
                        </Route>



                        {/* Admin Panel */}

                        {/* <Route path="/login">
                            <Login></Login>
                        </Route> */}
                        {/* <Route path="/signup">
                            <SignUp></SignUp>
                        </Route> */}
                        {/* <Route path="/dashboard">
                            <Dashboard></Dashboard>
                        </Route> */}
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>




                        <Route exact path="/land">
                            <TemporaryHome></TemporaryHome>
                        </Route>




                    </Switch>
                    <Footer></Footer>
                </Router>

            </AuthProvider>

        </div>
    );
};

export default Routing;