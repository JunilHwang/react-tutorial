import MusicData from 'assets/data/music_data.json'
import {Music, Category} from 'model/MusicModel'
interface IMusicRepository {
  getMusicList(category: Category, searchKey: string): Music[]
  getCategoryList(): Category[]
  getCategory(): Category
  setCategory(v:Category): void
}
class MusicRepository implements IMusicRepository {
  private musicList: Music[]
  constructor () {
    this.musicList = MusicData.data.map((v:any, k:number) => ({...v, price: parseInt(v.price), idx: k+1}) as Music)
  }
  getMusicList (category = 'ALL', searchKey = ''): Music[] {
    return this.musicList.slice().filter((v:Music) => {
      const bool:Boolean = category === 'ALL' || v.category === category
      if (searchKey.length === 0) {
        return bool
      } else {
        const bool2 = v.artist.indexOf(searchKey) !== -1 || v.albumName.indexOf(searchKey) !== -1
        return bool && bool2
      }
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