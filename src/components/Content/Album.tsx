import React, { Component } from 'react'
import { music } from 'middleware/Model'
import { numberFormat } from 'middleware/Util'
import { StoreState } from 'store/modules'
import { connect } from 'react-redux'

interface Props {
  list: music[]
  category: string
}
class Album extends Component<Props> {
  render () {
    const { list, category } = this.props
    return (
      <section className="album">
        <h3>{category}</h3>
        <ul>
          {list.map((v, k) =>
            <li>
              <div className="img-wrap"><img src={require(`assets/img/${v.image}`)} alt={v.image} /></div>
              <dl>
                <dt>{v.artist} - {v.title}</dt>
                <dd>
                  <p className="date">{v.reg_date}</p>
                  <p className="price">\ {numberFormat(v.price)}</p>
                  <p className="btm"><a href="#" className="btn submit">카드담기</a></p>
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
  ({ category, music }: StoreState) => ({
    list: music.list,
    category: music.category
  })
)(Album)