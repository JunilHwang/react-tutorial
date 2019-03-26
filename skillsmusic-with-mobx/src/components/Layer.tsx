import React, { Component } from 'react'

class Layer extends Component  {
  render() {
    return (
      <div className="layer">
        <span className="middle"></span><div className="layer-content">
          <a href="#" className="layer-close">X</a>
        </div>
      </div>
    );
  }
}

export default Layer