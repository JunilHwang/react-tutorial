import MusicStore from './MusicStore'
import CategoryStore from './CategoryStore'
import CartStore from './CartStore'

export interface IRootStore {
  music: MusicStore
  category: CategoryStore
  cart: CartStore
}
class RootStore implements IRootStore {
  public music: MusicStore
  public category: CategoryStore
  public cart: CartStore
  constructor() {
    this.music = new MusicStore(this)
    this.category = new CategoryStore(this)
    this.cart = new CartStore(this)
  }
}
export default new RootStore()