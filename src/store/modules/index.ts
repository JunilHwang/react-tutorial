import { combineReducers } from 'redux'
import category, {CategoryState} from './category'
import music, {MusicState} from './music'
import cart, {CartState} from './cart'
import layer, {LayerState} from './layer'

export default combineReducers({
  category, music, cart, layer
})
export interface StoreState {
  category: CategoryState
  music: MusicState
  cart: CartState
  layer: LayerState
}