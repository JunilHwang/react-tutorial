import CounteStore from './CounteStore'

export interface IRootStore {
  counter: CounteStore
}
class RootStore implements IRootStore {
  public counter: CounteStore
  constructor() {
    this.counter = new CounteStore(this)
  }
}
export default new RootStore()