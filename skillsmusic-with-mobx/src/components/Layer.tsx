import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { ILayerStore } from 'store/LayerStore'

type Props = { layer?: ILayerStore }
@inject('layer')
@observer
class Layer extends Component<Props>  {
  render() {
    const { layerState = null, close } = this.props.layer!
    const LayerTag = layerState === null ? <div></div> : <div className="layer">
        <span className="middle"></span><div className="layer-content">
          <a href="#" className="layer-close" onClick={close}>X</a>
        </div>
      </div>
    return LayerTag
  }
}

export default Layer