import React, { Component } from 'react';
import Menu from './components/Menu'
import Content from './components/Content'
import Layer from './components/Layer'

class App extends Component  {
  render() {
    return (
      <div className="site-wrap">
        <Menu />
        <Content />
        <Layer />
      </div>
    );
  }
}

export default App;
