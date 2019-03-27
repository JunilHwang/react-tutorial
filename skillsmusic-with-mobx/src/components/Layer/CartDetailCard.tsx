import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { ICartStore } from 'store/CartStore'
import { Cart } from 'model/CartModel'
import { numberFormat } from 'middleware/Util'

interface Props extends Cart {
  cart?: ICartStore
  k: number
}
@inject('cart')
@observer
class CartDetailCard extends Component<Props>  {
  render() {
    const { albumJaketImage, albumName, artist, price, cnt, release, k} = this.props
    const { deleteCart } = this.props.cart!
    const sum = price * (cnt||1)
    return (
      <li>
        <div className="img-wrap"><img src={require(`assets/images/${albumJaketImage}`)} alt={albumJaketImage} /></div>
        <dl>
          <dt>
            <strong>{artist}</strong>
            <p>{albumName}</p>
          </dt>
          <dd>
            <p>{release}</p>
            <p>가격 : ₩ {numberFormat(price)}</p>
            <p>갯수 : {cnt||1}</p>
            <p>합계 : ₩ {numberFormat(sum)}</p>
            <p><a href="#" className="btn delete" onClick={(e:any) => deleteCart(e, k)}>삭제하기</a></p>
          </dd>
        </dl>
      </li>
    )
  }
}

export default CartDetailCard