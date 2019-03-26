import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Music } from 'model/MusicModel'
import { IMusicStore } from 'store/MusicStore'
import { numberFormat } from 'middleware/Util'

type Props = { music?: IMusicStore }
@inject('music')
@observer
class Album extends Component<Props>  {
  render() {
    const { musicList } = this.props.music!
    return (
      <section className="album">
        <h3>cate01</h3>
        <ul>
          {musicList.map((v:Music, k:number) =>
            <li key={k}>
              <div className="img-wrap"><img src={require(`assets/images/${v.albumJaketImage}`)} alt={v.albumJaketImage} /></div>
              <dl>
                <dt>
                  <strong>{v.artist}</strong>
                  <p>{v.albumName}</p>
                </dt>
                <dd>
                  <p className="date">{v.release}</p>
                  <p className="price">₩ {numberFormat(v.price)}</p>
                  <p className="btm"><a href="#" className="btn main">카트등록</a></p>
                </dd>
              </dl>
            </li>)}
        </ul>
      </section> 
    )
  }
}

export default Album