import { combineReducers } from 'redux'
import category, {CategoryState} from './category'
import music, {MusicState} from './music'
import cart, {CartState} from './cart'

export default combineReducers({
  category, music, cart
})
export interface StoreState {
  category: CategoryState
  music: MusicState
  cart: CartState
}