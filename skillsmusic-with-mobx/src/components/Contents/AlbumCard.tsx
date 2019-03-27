import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Music } from 'model/MusicModel'
import { Cart } from 'model/CartModel'
import { IMusicStore } from 'store/MusicStore'
import { ICartStore } from 'store/CartStore'
import { numberFormat } from 'middleware/Util'
import Highlighter from 'react-highlight-words'

interface Props extends Music {
  music?: IMusicStore
  cart?: ICartStore
}
@inject('music', 'cart')
@observer
class AlbumCard extends Component<Props>  {
  render() {
    const { idx, category, albumJaketImage, artist, albumName, release, price } = this.props
    const { searchKey } = this.props.music!
    const { list: cartList, addCart } = this.props.cart!
    const vector:Cart = { idx, category, albumJaketImage, artist, albumName, release, price }
    const target:Cart|undefined = cartList.find((v:Cart) => v.idx === idx)
    const btnClass = cartList.find((v:Cart) => v.idx === idx) ? 'point' : 'main'
    const btnName = target === undefined ? '카트등록' : `추가하기 (${target.cnt})`
    return (
      <li>
        <div className="img-wrap"><img src={require(`assets/images/${albumJaketImage}`)} alt={albumJaketImage} /></div>
        <dl>
          <dt>
            <strong><Highlighter highlightClassName="searched" searchWords={[searchKey]} textToHighlight={artist} /></strong>
            <p><Highlighter highlightClassName="searched" searchWords={[searchKey]} textToHighlight={albumName} /></p>
          </dt>
          <dd>
            <p className="date">{release}</p>
            <p className="price">₩ {numberFormat(price)}</p>
            <p className="btm"><a href="#" className={`btn ${btnClass}`} onClick={(e:any) => addCart(e, vector)}>{btnName}</a></p>
          </dd>
        </dl>
      </li>
    )
  }
}

export default AlbumCard