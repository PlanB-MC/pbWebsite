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
import application from './Pages/application'

console.log(process.env.REACT_APP_TEST_TOKEN)
const App = () => (
<Router>
  <Switch>
  <Route exact path="/" component={LandingPage}/>
  <Route path="/about" component={About}/>
  <Route path="/apply" component={application}/>
  
</Switch>
</Router>
);



export default App;