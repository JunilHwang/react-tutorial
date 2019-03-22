import React, { Component } from 'react'
import ListContainer from './Menu/ListContainer'

// Menu
class Menu extends Component {
  render() {
    return (
      <nav className="site-menu">
        <h2><a href="#">Category</a></h2>
        <ListContainer />
      </nav>
    );
  }
}

export default Menu