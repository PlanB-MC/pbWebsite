import React, { Component } from 'react';
import './App.css';
import General from './Layouts/general';

class App extends Component {
  render() {
    return (
      <div className="App">
      Header  
      <General />
        Footer
      </div>
    );
  }
}

export default App;
