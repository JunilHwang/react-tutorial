import React, { Component } from 'react'
import { music } from 'middleware/Model'
import { numberFormat } from 'middleware/Util'
import { StoreState } from 'store/modules'
import { connect } from 'react-redux'
import Highlighter from "react-highlight-words"

interface Props {
  list: music[]
  category: string,
  searchKey: string
}
class Album extends Component<Props> {
  render () {
    const { list, category, searchKey } = this.props
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
                  <p className="price">\ {numberFormat(v.price)}</p>
                  <p className="btm"><a href="#" className="btn main">카드담기</a></p>
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
    category: music.category,
    searchKey: music.searchKey
  })
)(Album)