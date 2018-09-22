import React from 'react';
import { BrowserRouter, Switch, Route} from "react-router-dom"; 
import './Css/App.css';

import LandingPage from './Pages/landingPage';
import About from './Pages/aboutUs'

import application from './Pages/application'

console.log(process.env.REACT_APP_TEST_TOKEN)
const App = () => (
<BrowserRouter>
  <Switch>
  <Route exact path="/" component={LandingPage}/>
  <Route path="/about" component={About}/>
  <Route path="/apply" component={application}/>
  
</Switch>
</BrowserRouter>
);



export default App;