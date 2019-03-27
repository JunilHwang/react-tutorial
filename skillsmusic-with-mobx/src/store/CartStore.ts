import { observable, action } from 'mobx'
import { IRootStore } from './index'
import { Cart } from 'model/CartModel'
import cartRepository from 'repository/CartRepository'

export interface ICartStore {
  list: Cart[]
  addCart(e:any, cart:Cart): void
}

export default class CartStore implements ICartStore {
  private root: IRootStore
  @observable public list:Cart[] = cartRepository.getCart()
  constructor(root: IRootStore) { this.root = root }

  @action addCart = (e:any, cart:Cart):void => {
    e.preventDefault()
    const list: Cart[] = this.list
    const target:Cart|undefined = list.find((v:Cart) => v.idx === cart.idx)
    if (target === undefined) {
      cart.cnt = 1
      list.push(cart)
    } else {
      target.cnt = (target.cnt || 0) + 1
    }
    cartRepository.addCart(list)
  }
}
