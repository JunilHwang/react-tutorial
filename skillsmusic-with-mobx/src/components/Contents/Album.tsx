import React, { Component } from 'react'

class Album extends Component  {
  render() {
    return (

      <section className="album">
        <h3>cate01</h3>
        <ul>
          <li>
            <div className="img-wrap"><img src={require('assets/images/729294.jpg')} alt="img01" /></div>
              <dl>
                <dt>가수01 - Lorem</dt>
                <dd>
                  <p className="date">2019-03-01</p>
                  <p className="price">\ 11,000</p>
                  <p className="btm"><a href="#" className="btn point">추가하기 (1)</a></p>
                </dd>
              </dl>
          </li>
        </ul>
      </section> 
    )
  }
}

export default Album