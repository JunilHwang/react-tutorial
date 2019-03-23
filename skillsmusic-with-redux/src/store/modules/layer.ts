import { createAction, handleActions, Action } from 'redux-actions';
import Layer from 'components/Content/Layer';

const OPEN:string = 'layer/OPEN'
const CLOSE:string = 'layer/CLOSE'
const SET_DATA:string = 'layer/SET_DATA'

export const actionsCreators = {
  open: createAction<string>(OPEN),
  close: createAction(CLOSE),
  setData: createAction<object>(SET_DATA)
}
export interface LayerState {
  opend: null|string,
  data?: null|object
}

const initialState:LayerState = { opend: null, data: null }

export default handleActions<LayerState, any>({
  [OPEN]: (state, action:Action<string>) => ({ ...state, opend: action.payload }),
  [CLOSE]: state => initialState,
  [SET_DATA]: (state, action: Action<object>) => ({ ...state, data: action.payload })
}, initialState)