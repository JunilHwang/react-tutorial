import React, { Component } from 'react'
import Cart from './Contents/Cart'
import Search from './Contents/Search'
import Album from './Contents/Album'

class Content extends Component  {
  render() {
    return (
      <div className="site-content">
        <Cart />
        <Search />
        <Album />
      </div>
    );
  }
}

export default Content;