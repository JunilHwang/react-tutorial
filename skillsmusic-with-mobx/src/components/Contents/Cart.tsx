import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { ICartStore } from 'store/CartStore'
import { ILayerStore } from 'store/LayerStore'
import { Cart as TCart } from 'model/CartModel'
import { numberFormat } from 'middleware/Util'

type Props = {
  cart?: ICartStore
  layer?: ILayerStore
}
@inject('cart', 'layer')
@observer
class Cart extends Component<Props>  {
  render() {
    const { list } = this.props.cart!
    const totalCnt = list.reduce((v1:number, v2:TCart) => v1 + v2.cnt!, 0)
    const totalPrice = list.reduce((v1:number, v2:TCart) => v1 + (v2.cnt! * v2.price), 0)
    const { open } = this.props.layer!
    return (
      <section className="cart-info">
        <h3>카트정보</h3>
        <p>수량 : {numberFormat(totalCnt)}</p>
        <p>가격 : ₩ {numberFormat(totalPrice)}</p>
        <a href="#" className="btn main" onClick={(e: any) => open(e, 'CartDetail', null)}>카트정보 상세보기</a>
      </section>
    );
  }
}

export default Cart