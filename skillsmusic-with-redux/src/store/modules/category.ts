import model from 'middleware/Model'
import { createAction, handleActions, Action } from 'redux-actions';
const SELECT:string = 'category/SELECT'

export const actionsCreators = {
  select: createAction<number>(SELECT)
}
export interface CategoryState { selected: number, list: string[] }

const initialState:CategoryState = {
  selected: model.getCategory(),
  list: model.getCategoryList()
}

export default handleActions<CategoryState, number>({
  [SELECT]: (state, action: Action<number>) => {
    const selected: number = action.payload
    model.setCategory(selected)
    return { ...state, selected }
  }
}, initialState)