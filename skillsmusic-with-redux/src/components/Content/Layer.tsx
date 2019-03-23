import React, { Component } from 'react';
import CartDetail from './Layer/CartDetail'
import { actionsCreators as layerActions } from 'store/modules/layer'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

type Props = { name: string, LayerActions: typeof layerActions }
class Layer  extends Component<Props> {
  render() {
    const { name, LayerActions } = this.props
    const getContent = ({ 'CartDetail': <CartDetail /> } as any)[name]
    return (
      <div className="layer">
        <span className="middle"></span>
        <div className="layer-content">
          <a href="#" className="close" onClick={() => LayerActions.close()}>X</a>
          {getContent}
        </div>
      </div>
    )
  }
}

export default connect(
  ({}) => ({}),
  dispatch => ({ LayerActions: bindActionCreators(layerActions, dispatch) })
)(Layer)