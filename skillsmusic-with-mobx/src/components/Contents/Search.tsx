import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Music } from 'model/MusicModel'
import { IMusicStore } from 'store/MusicStore'

type Props = {
  music?: IMusicStore
}

@inject('music')
@observer
class Search extends Component<Props>  {
  render() {
    const { searchMusic } = this.props.music!
    const search = (e:any) => {
      const searchKey = e.target.key.value
      searchMusic(e, searchKey)
    }
    return (
      <section className="search">
        <h3>앨범검색</h3>
        <form action="post" name="search" onSubmit={search}>
          <fieldset>
            <legend>앨범검색</legend>
            <input type="text" name="key" placeholder="앨범 검색" size={50} className="input" />
            <button type="submit" className="btn main">검색</button>
          </fieldset>
        </form>
      </section>
    );
  }
}

export default Search