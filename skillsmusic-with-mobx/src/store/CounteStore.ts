import { observable, action } from 'mobx'
import { IRootStore } from './index'

export interface ICounteStore {
  root: IRootStore
  n: number
  increase(): void
  decrease(): void
}

export default class CounteStore implements ICounteStore {
  @observable public n = 0
  public root: IRootStore
  constructor(root: IRootStore) { this.root = root }
  @action increase = () => { this.n++ }
  @action decrease = () => { this.n-- }
}
