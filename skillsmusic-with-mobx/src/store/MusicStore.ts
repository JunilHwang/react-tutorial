import { observable, action } from 'mobx'
import { IRootStore } from './index'

export interface IMusicStore {
  root: IRootStore
}

export default class MusicStore implements IMusicStore {
  public root: IRootStore
  constructor(root: IRootStore) { this.root = root }
}
