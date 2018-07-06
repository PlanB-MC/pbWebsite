import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 
import './Css/App.css';
import General from './Layouts/general';
import Header from './Components/Global/header';
import ScrollToTop from './Components/Global/scrollTop';

const App = () => (
  <Router> 
    <ScrollToTop>  
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/t" component={Topics} />
    </ScrollToTop>
  </Router>
);



const Home = () => (
  <div>
    <h2>Home</h2>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
);

const About = () => (
  <div>
    <General />
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