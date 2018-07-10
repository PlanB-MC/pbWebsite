import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import './Css/App.css';
import Header from './Components/Global/header';
import ScrollToTop from './Components/Global/scrollTop';
import LandingPage from './Pages/landingPage';
import About from './Pages/aboutUs'
import server from './Pages/serverPage'
import Member from './Pages/members';
import Quests from './Pages/questPage';

const App = () => (
  <Router> 
    <ScrollToTop>  
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/members" component={Member} />
      <Route path="/quests" component={Quests} />
      <Route path="/server" component={server} />
    </ScrollToTop>
  </Router>
);



const Home = () => (
  <div>
   <LandingPage />
  </div>
);



const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

export default App;