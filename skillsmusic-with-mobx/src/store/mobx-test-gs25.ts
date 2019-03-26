import { computed, observable, autorun, action, transaction } from 'mobx'

type basket = {
  name: string,
  price: number
}
interface gs25 {
  total: number;
  select(name: string, prive:number): void;
}
class GS25 implements gs25 {
  @observable private basket:basket[] = []

  @computed
  public get total ():number { return this.basket.reduce((prev:number, next:basket) => prev + next.price, 0) }
  
  @action select (name:string, price:number):void { this.basket.push({ name, price }) }
}

const gs25 = new GS25()
autorun(() => console.log(gs25.total))
transaction(() => {
  gs25.select(' 물', 800)
  gs25.select('커피', 1000)
  gs25.select('컵라면', 1500)
})