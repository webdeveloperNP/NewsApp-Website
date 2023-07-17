import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
            <div className="col-md-3 mx-4">
                <NewsItem title='My title' description='This is a news card' url="https://s.yimg.com/ny/api/res/1.2/qxqwDKvbkFRLdZQOvRWPcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/92bc72b0-237a-11ee-bbbf-426f5a5c945f" class="card-img-top" alt="Image Here" />
            </div>
            <div className="col-md-3 mx-4">
                <NewsItem title='My title' description='This is a news card'/>
            </div>
            <div className="col-md-3 mx-4">
            <NewsItem title='My title' description='This is a news card'/>
            </div>
        </div>    
      </div>
    )
  }
}
