import model, { music } from 'middleware/Model'
import { createAction, handleActions, Action } from 'redux-actions';

const SELECT:string = 'music/SELECT'

export const actionsCreators = { select: createAction<string>(SELECT) }
export interface MusicState {
  category: string
  list: music[]
}

const initialState:MusicState = {
  category: model.getCategoryList()[model.getCategory()],
  list: model.getMusic()
}

export default handleActions<MusicState, string>({
  [SELECT]: (state, action: Action<string>) => {
    const category:string = action.payload
    let list:music[] = model.getMusic()
    if (category !== 'ALL') list = list.filter((v: music) => v.category === category)
    return { ...state, list, category }
  }
}, initialState)