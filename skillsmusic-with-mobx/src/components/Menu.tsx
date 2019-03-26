import React, { Component } from 'react'

class Menu extends Component  {
  render() {
    return (
      <nav className="site-menu">
        <h2><a href="#">Category</a></h2>
        <ul>
          <li><a href="#">ALL</a></li>
          <li><a href="#" className="active">cate01</a></li>
          <li><a href="#">cate02</a></li>
          <li><a href="#">cate03</a></li>
          <li><a href="#">cate04</a></li>
          <li><a href="#">cate05</a></li>
        </ul>
      </nav>
    )
  }
}

export default Menu;