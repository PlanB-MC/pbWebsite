import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import './Css/App.css';
import Header from './Components/Global/header';
import LandingPage from './Pages/landingPage';
import About from './Pages/aboutUs'
import server from './Pages/serverPage'
import Member from './Pages/members';
import Quests from './Pages/questPage';
import Tutorial from './Pages/tutorialPage';
import Maps from './Pages/mapPage';


const App = () => (
  <Router> 
    <div> 
        <Header />
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/members" component={Member} />
        <Route path="/quests" component={Quests} />
        <Route path="/server" component={server} />
        <Route path="/tutorials" component={Tutorial} />
        <Route path="/maps" component={Maps} />
      
    </div>
  </Router>
);


export default App;