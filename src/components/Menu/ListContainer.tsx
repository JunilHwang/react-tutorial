import { StoreState } from 'store/modules'
import { actionsCreators as categoryActions } from 'store/modules/category';
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import List from './List'

// listContainer
type listContainerProps = {
  selected: number
  list: string[]
  CategoryActions: typeof categoryActions
}
class ListContainer extends Component<listContainerProps> {
  onSelect = (idx:number) => {
    const { CategoryActions } = this.props
    CategoryActions.select(idx)
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
  dispatch => ({ CategoryActions: bindActionCreators(categoryActions, dispatch) })
)(ListContainer)