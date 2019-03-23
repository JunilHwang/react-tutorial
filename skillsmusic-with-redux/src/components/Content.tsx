import React, { Component } from 'react';
import Cart from './Content/Cart'
import Search from './Content/Search'
import Album from './Content/Album'
import Layer from './Content/Layer'
import { connect } from 'react-redux'
import { StoreState } from 'store/modules'

type Props = {
  opend: null|string
} 
class Content extends Component<Props> {
  render() {
    const {opend} = this.props
    return (
      <div className="site-content">
        <Cart />
        <Search />
        <Album />
        {opend && <Layer name={opend} />}
      </div>
    )
  }
}

export default connect(
  ({ layer }:StoreState) => ({ opend: layer.opend })
)(Content)