import model, { music } from 'middleware/Model'
import { createAction, handleActions, Action } from 'redux-actions';

const SELECT:string = 'music/SELECT'
const SEARCH:string = 'music/SEARCH'

export const actionsCreators = {
  select: createAction<string>(SELECT),
  search: createAction<string>(SEARCH)
}
export interface MusicState {
  category: string
  list: music[],
  searchKey: string
}

const selected = model.getCategory()
const category: string = model.getCategoryList()[selected]
const musics = model.getMusic()
const list: music[] = selected !== 0 ? musics.filter((v:music) => v.category === category) : musics
const initialState:MusicState = { category, list, searchKey: '' }

export default handleActions<MusicState, string>({
  [SELECT]: (state, action: Action<string>) => {
    const category:string = action.payload
    let list:music[] = category === 'ALL' ? musics : musics.filter((v: music) => v.category === category)
    return { ...state, list, category }
  },
  [SEARCH]: (state, action: Action<string>) => {
    const searchKey = action.payload
    const list = musics.filter((v:music) => {
      if (v.category !== state.category && state.category !== 'ALL') return false
      const titleIndex: number = v.title.indexOf(searchKey)
      const singerIndex: number = v.singer.indexOf(searchKey)
      return titleIndex + singerIndex > -2
    })
    return { ...state, list, searchKey }
  }
}, initialState)