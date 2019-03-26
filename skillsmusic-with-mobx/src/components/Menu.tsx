import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { IMusicStore } from 'store/MusicStore'
import { Category } from 'model/MusicModel'

type Props = { music?: IMusicStore }
@inject('music')
@observer
class Menu extends Component<Props>  {
  render() {
    const { categoryList = [], category = 'ALL', setCategory } = this.props.music!
    return (
      <nav className="site-menu">
        <h2><a href="#">Category</a></h2>
        <ul>
          {categoryList.map((v:Category, k:number) =>
            <li key={k}>
              <a href="#"
                 className={v === category ? 'active' : ''}
                 onClick={(e:any) => setCategory(e, v)}>{v}</a>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}

export default Menu;