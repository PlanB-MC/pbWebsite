import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"; 
import './Css/App.css';
import Header from './Components/Global/header';
import ScrollToTop from './Components/Global/scrollTop';
import LandingPage from './Pages/landingPage';
import About from './Pages/aboutUs'
import server from './Pages/serverPage'
import Member from './Pages/members';
import Quests from './Pages/questPage';
import Tutorial from './Pages/tutorialPage';

const App = () => (
  <Router> 
  <div>
    <ScrollToTop>  
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/members" component={Member} />
      <Route path="/quests" component={Quests} />
      <Route path="/server" component={server} />
      <Route path="/tutorials" component={Tutorial} />
    </ScrollToTop>
    </div>
  </Router>
);



const Home = () => (
  <div>
   <LandingPage />
  </div>
);

export default App;