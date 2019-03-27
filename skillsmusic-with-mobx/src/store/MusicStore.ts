import { observable, action } from 'mobx'
import { IRootStore } from './index'
import musicRepository from 'repository/MusicRepository'
import { Music, Category } from 'model/MusicModel'
import MusicRepository from 'repository/MusicRepository';

export interface IMusicStore {
  musicList: Music[]
  categoryList: Category[]
  category: Category
  searchKey: string
  setCategory(e:any, category:Category): void
  searchMusic(e:any, searchKey:string): void
}

export default class MusicStore implements IMusicStore {
  private root: IRootStore
  @observable public categoryList: Category[] = musicRepository.getCategoryList()
  @observable public category: Category = MusicRepository.getCategory()
  @observable public searchKey: string = ''
  @observable public musicList: Music[] = musicRepository.getMusicList(this.category)

  constructor(root: IRootStore) { this.root = root }

  @action setCategory = (e:any, category:Category):void => {
    e.preventDefault()
    this.category = category
    this.musicList = musicRepository.getMusicList(category)
    musicRepository.setCategory(category)
  }

  @action searchMusic = (e:any, searchKey:string):void => {
    e.preventDefault()
    this.musicList = musicRepository.getMusicList(this.category, this.searchKey = searchKey)
  }
}
 