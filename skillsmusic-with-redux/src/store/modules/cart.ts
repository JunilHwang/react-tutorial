import model, { cart } from 'middleware/Model'
import { createAction, handleActions, Action } from 'redux-actions';

const INSERT:string = 'cart/INSERT'
const REMOVE:string = 'cart/REMOVE'
const CLEAR:string = 'cart/CLEAR'

export const actionsCreators = {
  insert: createAction<cart>(INSERT),
  remove: createAction<number>(REMOVE),
  clear: createAction<void>(CLEAR)
}
export interface CartState { list: cart[] }

const initialState:CartState = { list: model.getCart() }

export default handleActions<CartState, any>({
  [INSERT]: (state, action:Action<cart>) => {
    const list:cart[] = state.list.slice()
    const cart:cart = action.payload
    const target:cart|undefined = list.find((v: cart) => v.idx === cart.idx)
    if (target !== undefined) {
      target.cnt && (target.cnt += 1)
    } else {
      cart.cnt = 1
      list.push(cart)
    }
    model.setCart(list)
    return { list }
  },
  [REMOVE]: (state, action:Action<number>) => {
    const list:cart[] = state.list.slice()
    list.splice(action.payload, 1)
    model.setCart(list)
    return { list }
  },
  [CLEAR]: (state) => {
    model.setCart([])
    return { list: [] }
  }
}, initialState)