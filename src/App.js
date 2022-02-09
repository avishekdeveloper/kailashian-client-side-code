// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Header/Header';
import TemporaryHome from './Components/TemoraryHome/TemporaryHome';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App ">

      {/* <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/land">
            <TemporaryHome></TemporaryHome>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router> */}

      <Router>
        {/* <Header></Header> */}
        <Switch>
          <Route exact path="/">
            <TemporaryHome></TemporaryHome>
          </Route>
        </Switch>
        {/* <Footer></Footer> */}
      </Router>


      {/* <Header></Header>
      <Home></Home>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
