import { observable, action } from 'mobx'
import { IRootStore } from './index'
import musicRepository from 'repository/MusicRepository'
import { Music, Category } from 'model/MusicModel'
import MusicRepository from 'repository/MusicRepository';

export interface IMusicStore {
  musicList: Music[]
  categoryList: Category[]
  category: Category
  setCategory(e:any, category:Category): void
}

export default class MusicStore implements IMusicStore {
  private root: IRootStore
  @observable public musicList:Music[]
  @observable public categoryList:Category[]
  @observable public category:Category

  constructor(root: IRootStore) {
    this.root = root
    this.categoryList = musicRepository.getCategoryList()
    this.category = MusicRepository.getCategory()
    this.musicList = musicRepository.getMusicList(this.category)
  }

  @action setCategory = (e:any, category:Category):void => {
    e.preventDefault()
    this.category = category
    this.musicList = musicRepository.getMusicList(category)
    musicRepository.setCategory(category)
  }
}
 