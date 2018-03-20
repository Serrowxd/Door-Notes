import React, { Component } from 'react';

import Controls from './components/Controls';
import Display from './components/Display';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Controls />
        <Display />
      </div>
    );
  }
}

export default App;
