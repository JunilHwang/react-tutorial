import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Music } from 'model/MusicModel'
import { IMusicStore } from 'store/MusicStore'
import AlbumCard from './AlbumCard'

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
            <AlbumCard key={k} {...v} />)}
        </ul>
      </section> 
    )
  }
}

export default Album