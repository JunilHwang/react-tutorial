import music from '../interface/music'
import cart from '../interface/cart'

class Model {
  private category: number
  private categoryList: string[]
  private music: music[]
  private cart: cart[]

  constructor () {
    this.category = this.initCategory()
    this.music = this.initMusic()
    this.categoryList = this.initCategoryList()
    this.cart = this.initCart()
  }

  private initCategory (): number {
    return this.get('category') !== null ? ~~this.get('category') : -1
  }
  private initMusic (): music[] { return require('../assets/data/data.json') }
  private initCategoryList (): string[] {
    const setList = new Set()
    this.music.forEach(v => setList.add(v.category))
    return Array.from(setList)
  }
  private initCart () { return this.get('cart') !== null ? this.get('cart') : [] }

  public setCategory (v: number) { this.set('category', this.category = v) }
  public setCart (v: cart[]) { this.set('cart', this.cart = v) }

  public getCategory () { return this.category }
  public getCategoryList () { return this.categoryList.slice() }
  public getMusic () { return this.music.slice().map(v => Object.assign({}, v)) }
  public getCart () { return this.cart.slice().map(v => Object.assign({}, v)) }

  private get (key: string) {
    const json:string = localStorage.getItem(key) || 'null'
    return JSON.parse(json) || null
  }
  private set (key: string, ele: any) { localStorage.setItem(key, JSON.stringify(ele)) }
}

export default Model