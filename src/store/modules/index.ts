import { combineReducers } from 'redux'
import category, {CategoryState} from './category'

export default combineReducers({
  category
})
export interface StoreState {
  category: CategoryState
}