import { observable, action } from 'mobx'
import { IRootStore } from './index'

export interface ICartStore {
  
}

export default class CartStore implements ICartStore {
  private root: IRootStore
  constructor(root: IRootStore) { this.root = root }
}
