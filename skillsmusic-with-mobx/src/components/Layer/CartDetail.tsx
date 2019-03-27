import React, { Component } from 'react'
import { ICartStore } from 'store/CartStore'
import { Cart } from 'model/CartModel'
import { observer, inject} from 'mobx-react'
import { numberFormat } from 'middleware/Util'
import CartDetailCard from './CartDetailCard'

type Props = {
  cart?: ICartStore
}
@inject('cart')
@observer
class CartDetail extends Component<Props>  {
  render() {
    const { list, clearCart } = this.props.cart!
    const total = list.reduce((v1:number, v2:Cart) => v1 + (v2.cnt||0) * v2.price, 0)
    return (
      <section className="album" style={{width: 900}}>
        <h3 className="layer-title">카트 상세정보</h3>
        <p>총 금액 : ₩ {numberFormat(total)}</p>
        <p><a href="#" className="btn point" onClick={clearCart}>구매하기</a></p>
        <ul>
          {list.map((v:Cart, k:number) => <CartDetailCard key={k} k={k} {...v} />)}
        </ul>
      </section>
    )
  }
}

export default CartDetail