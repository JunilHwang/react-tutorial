import { observable, action } from 'mobx'
import { IRootStore } from './index'

export interface ICartStore {
  root: IRootStore
}

export default class CartStore implements ICartStore {
  public root: IRootStore
  constructor(root: IRootStore) { this.root = root }
}
