import React, { Component } from 'react'
import { cart } from 'middleware/Model'
import { StoreState } from 'store/modules'
import { connect }  from 'react-redux'
import { numberFormat } from 'middleware/Util'
import { bindActionCreators } from 'redux'
import { actionsCreators as cartActions } from 'store/modules/cart'
import { actionsCreators as layerActions } from 'store/modules/layer'

type Props = {
  list: cart[]
  CartActions: typeof cartActions
  LayerActions: typeof layerActions
}
const CartDetail = ( { list, CartActions, LayerActions }: Props) => {
  let total:number = 0
  list.forEach((v:cart) => { total += (v.price * (v.cnt||1)) })
  const clear = () => {
    alert('구매하였습니다')
    CartActions.clear()
    LayerActions.close()
  }
  return (
    <section className="album" style={{ width: 900 }}>
      <h3 className="layer-title">카트 상세보기</h3>
      <p>
        합계 : ₩ {numberFormat(total)}
        <a href="#!" className="btn point" onClick={clear}>구매하기</a>
      </p>
      <ul>
        {list.map((v: cart, k:number) =>
          <li key={k}>
            <div className="img-wrap"><img src={require(`assets/img/${v.image}`)} alt={v.image} /></div>
            <dl>
              <dt>{v.singer} - {v.title}</dt>
              <dd>
                <p className="date">{v.reg_date}</p>
                <p className="price">가격 : ₩ {numberFormat(v.price)}</p>
                <p className="price">갯수 : {numberFormat(v.cnt || 1)} 개</p>
                <p className="price">합계 : ₩ {numberFormat(v.price * (v.cnt || 1))}</p>
                <p className="btm"><a href="#!" className="btn delete" onClick={() => CartActions.remove(k)}>삭제</a></p>
              </dd>
            </dl>
          </li>
        )}
      </ul>
    </section>
  )
}

export default  connect(
  ({ cart }: StoreState) => ({ list: cart.list }),
  dispatch => ({
    CartActions: bindActionCreators(cartActions, dispatch),
    LayerActions: bindActionCreators(layerActions, dispatch)
  })
)(CartDetail)