import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; 
import './Css/App.css';
import Header from './Components/Global/header';
import ScrollToTop from './Components/Global/scrollTop';
import LandingPage from './Pages/landingPage';
import About from './Pages/aboutUs'
import server from './Pages/serverPage'
import Member from './Pages/members';
import Quests from './Pages/questPage';
import Tutorial from './Pages/tutorialPage';
import Maps from './Pages/mapPage';
import Footer from './Components/Global/footer';

console.log(process.env.TEST_TOKEN)
const App = () => (
  <Router> 
      <ScrollToTop>  
        <Header />
        <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/members" component={Member} />
        <Route path="/quests" component={Quests} />
        <Route path="/server" component={server} />
        <Route path="/tutorials" component={Tutorial} />
        <Route path="/maps" component={Maps} />
        </Switch>
        <Footer />
      </ScrollToTop>
  </Router>
);



export default App;