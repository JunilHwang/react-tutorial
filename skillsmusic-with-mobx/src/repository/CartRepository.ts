import { Cart } from 'model/CartModel'
type ICartRepository = {
  getCart():Cart[]
  addCart(list:Cart[]): void
}
class CartRepository implements ICartRepository {
  constructor() {}
  getCart ():Cart[] { return JSON.parse(localStorage.getItem('cart') || 'null') || [] }
  addCart (list:Cart[]):void {
    localStorage.setItem('cart', JSON.stringify(list))
  }
}

export default new CartRepository()