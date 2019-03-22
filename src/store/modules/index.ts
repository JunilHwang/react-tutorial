import { combineReducers } from 'redux'
import category, {CategoryState} from './category'
import music, {MusicState} from './music'

export default combineReducers({
  category, music
})
export interface StoreState {
  category: CategoryState
  music: MusicState
}