import React, { Component } from 'react';
import model from 'middleware/Model'

class Menu extends Component {
  render() {
    const category: number = model.getCategory()
    const rootActive: string = category === -1 ? 'active' : ''
    return (
      <nav className="site-menu">
        <h2><a href="#">Category</a></h2>
        <ul>
          <li><a href="#" className={rootActive}>ALL</a></li>
          {
            model.getCategoryList().map((v, k) => <li key={k}><a href="#" className={category === k ? 'active' : ''}>{v}</a></li>)
          }
        </ul>
      </nav>
    );
  }
}

export default Menu;
