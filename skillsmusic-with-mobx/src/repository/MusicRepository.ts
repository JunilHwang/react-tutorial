import MusicData from 'assets/data/music_data.json'
import {Music, Category} from 'model/MusicModel'
interface IMusicRepository {
  getMusicList(category: Category): Music[]
  getCategoryList(): Category[]
  getCategory(): Category
  setCategory(v:Category): void
}
class MusicRepository implements IMusicRepository {
  private musicList: Music[]
  constructor () { this.musicList = MusicData.data.map(v => ({...v, price: parseInt(v.price)}) as Music) }
  getMusicList (category = 'ALL'): Music[] {
    return this.musicList.slice().filter((v:Music) => {
      return category === 'ALL' || v.category === category
    })
  }
  getCategoryList (): Category[] {
    return ((musicList: Music[]): Category[] => {
      const categorySet: Set<Category> = new Set()
      musicList.forEach((v: Music) => { categorySet.add(v.category) })
      return ['ALL', ...Array.from(categorySet)]
    })(this.musicList)
  }
  getCategory (): Category { return localStorage.getItem('category') || 'ALL' }
  setCategory (v:Category): void { localStorage.setItem('category', v) }
}

export default new MusicRepository()