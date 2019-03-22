import React, { Component } from 'react';
import Cart from './Content/Cart'
import Search from './Content/Search'
import Album from './Content/Album'
export default class extends Component {
  render() {
    return (
      <div className="site-content">
        <Cart />
        <Search />
        <Album />
      </div>
    )
  }
}
