import { StoreState } from 'store/modules'
import { actionsCreators as categoryActions } from 'store/modules/category';
import { actionsCreators as musicActions } from 'store/modules/music';
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import List from './List'

// listContainer
type listContainerProps = {
  selected: number
  list: string[]
  CategoryActions: typeof categoryActions
  MusicActions: typeof musicActions
}
class ListContainer extends Component<listContainerProps> {
  onSelect = (idx:number) => {
    const { CategoryActions, MusicActions } = this.props
    const { list } = this.props
    CategoryActions.select(idx)
    MusicActions.select(list[idx])
  }
  render() {
    const { selected, list } = this.props
    const { onSelect } = this
    return (
      <ul>
        {list.map((v, k) => <List key={k} category={k} active={selected == k ? 'active' : ''} html={v} onSelect={onSelect} />)}
      </ul>
    )
  }
}
export default connect(
  ({ category }: StoreState) => ({ selected: category.selected, list: category.list }),
  dispatch => ({
    CategoryActions: bindActionCreators(categoryActions, dispatch),
    MusicActions: bindActionCreators(musicActions, dispatch),
  })
)(ListContainer)