import React, { Component } from 'react'
import { music, cart } from 'middleware/Model'
import { numberFormat } from 'middleware/Util'
import { StoreState } from 'store/modules'
import { connect } from 'react-redux'
import Highlighter from 'react-highlight-words'
import { actionsCreators as cartActions } from 'store/modules/cart'
import { bindActionCreators } from 'redux'

type Props = {
  list: music[],
  category: string,
  searchKey: string,
  cartList: cart[],
  CartActions: typeof cartActions
}
class Album extends Component<Props> {
  render () {
    const { list, category, searchKey, CartActions, cartList } = this.props
    const insertCart = (e:any, v:cart) => {
      e.preventDefault()
      CartActions.insert(v)
    }
    const getBtnClass = (idx:number) => {
      const target:cart|undefined = cartList.find((v:cart) => v.idx === idx)
      return target === undefined ? 'main' : 'point'
    }
    const getBtnText = (idx:number) => {
      const target: cart | undefined = cartList.find((v: cart) => v.idx === idx)
      return target === undefined ? '카트담기' : `추가하기 (${target.cnt})`
    }
    return (
      <section className="album">
        <h3>{category}</h3>
        <ul>
          {list.map((v, k) =>
            <li key={k}>
              <div className="img-wrap"><img src={require(`assets/img/${v.image}`)} alt={v.image} /></div>
              <dl>
                <dt>
                  <Highlighter highlightClassName="searched" searchWords={[searchKey]} textToHighlight={v.singer} /> -
                  <Highlighter highlightClassName="searched" searchWords={[searchKey]} textToHighlight={v.title} />
                </dt>
                <dd>
                  <p className="date">{v.reg_date}</p>
                  <p className="price">₩ {numberFormat(v.price)}</p>
                  <p className="btm"><a href="#" className={`btn ${getBtnClass(v.idx)}`} onClick={(e:any) => insertCart(e, v)}>{getBtnText(v.idx)}</a></p>
                </dd>
              </dl>
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default connect(
  ({ music, cart }: StoreState) => ({
    list: music.list,
    category: music.category,
    searchKey: music.searchKey,
    cartList: cart.list
  }),
  dispatch => ({
    CartActions: bindActionCreators(cartActions, dispatch),
  })
)(Album)