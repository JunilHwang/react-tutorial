import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StoreState } from 'store/modules';
import { actionsCreators as musicActions } from 'store/modules/music';
import { bindActionCreators } from 'redux'

type Props = { MusicActions: typeof musicActions }
class Search extends Component<Props> {
  render () {
    const onSubmit = (e:any) => {
      e.preventDefault()
      const key = e.target.key.value
      const { MusicActions } = this.props
      MusicActions.search(key)
    }
    return (
      <section className="search">
        <h3>앨범검색</h3>
        <form action="post" name="search" onSubmit={onSubmit}>
          <fieldset>
            <legend>앨범검색</legend>
            <input type="text" name="key" placeholder="앨범검색" size={50} className="input" />
            <button type="submit" className="btn main">검색</button>
          </fieldset>
        </form>
      </section>
    )
  }
}

export default connect(
  ({}) => ({}),
  dispatch => ({ MusicActions: bindActionCreators(musicActions, dispatch) })
)(Search)