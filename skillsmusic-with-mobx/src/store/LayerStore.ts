import { observable, action } from 'mobx'
import { IRootStore } from './index'

export interface ILayerStore {
  layerState:string|null
  layerData:object|null
  open(e:any, layer:string, layerData:object|null):void
  close(e:any):void
}

export default class LayerStore implements ILayerStore {
  private root: IRootStore
  @observable public layerState:string|null = null
  @observable public layerData:object|null = null
  constructor(root: IRootStore) { this.root = root }
  @action open = (e:any, layer:string, layerData:object|null = null):void => {
    this.layerState = layer
    this.layerData = layerData
  }
  @action close = (e:any):void => {
    e.preventDefault()
    this.layerState = null
    this.layerData = null
  }
}
