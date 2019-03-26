import MusicStore from './MusicStore'
import CartStore from './CartStore'
import LayerStore from './LayerStore'

export interface IRootStore {
  music: MusicStore
  cart: CartStore
  layer: LayerStore
}
class RootStore implements IRootStore {
  public music: MusicStore
  public cart: CartStore
  public layer: LayerStore
  constructor() {
    this.music    = new MusicStore(this)
    this.cart     = new CartStore(this)
    this.layer    = new LayerStore(this)
  }
}
export default new RootStore()