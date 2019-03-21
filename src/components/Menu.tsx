import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return (
      <nav className="site-menu">
        <h2><a href="#">Category</a></h2>
        <ul>
          <li><a href="#">ALL</a></li>
        </ul>
      </nav>
    );
  }
}

export default Menu;
