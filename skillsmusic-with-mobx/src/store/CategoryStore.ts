import { observable, action } from 'mobx'
import { IRootStore } from './index'

export interface ICategoryStore {
  root: IRootStore
}

export default class CategoryStore implements ICategoryStore {
  public root: IRootStore
  constructor(root: IRootStore) { this.root = root }
}
