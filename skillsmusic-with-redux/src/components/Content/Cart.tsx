import React, { Component } from 'react'
import { cart } from 'middleware/Model'
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'
import { StoreState } from 'store/modules'
import { actionsCreators as layerActions } from 'store/modules/layer'
import { numberFormat } from 'middleware/Util'

type Props = {
  list: cart[]
  LayerActions: typeof layerActions
}
class Cart extends Component<Props> {
  render () {
    const { list, LayerActions } = this.props
    let cnt:number = 0
    let sum:number = 0
    list.forEach((v:cart) => {
      const n:number = v.cnt || 0
      cnt += n
      sum += v.price * n
    })
    return (
      <section className="cart-info">
        <h3>카트정보</h3>
        <p>수량 : {cnt}</p>
        <p>가격 : ₩ {numberFormat(sum)}</p>
        <p><a href="#" className="btn main" onClick={() => LayerActions.open('CartDetail')}>상세보기</a></p>
      </section>
    )
  }
}

export default connect(
  ({ cart }: StoreState) => ({ list: cart.list }),
  dispatch => ({
    LayerActions: bindActionCreators(layerActions, dispatch)
  })
)(Cart)