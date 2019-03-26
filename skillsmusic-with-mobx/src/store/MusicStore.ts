import { observable, action } from 'mobx'
import { IRootStore } from './index'
import musicRepository from 'repository/MusicRepository'
import { Music, Category } from 'model/MusicModel'
import MusicRepository from 'repository/MusicRepository';

export interface IMusicStore {
  musicList: Music[]
  categoryList: Category[]
  category: Category
  setCategory(category:Category): void
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

  @action setCategory (category:Category):void {
    this.category = category
    musicRepository.setCategory(category)
  }
}
 