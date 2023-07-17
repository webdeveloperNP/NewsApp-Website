import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h2>Top Headlines</h2>
        <div className="row">
            <div className="col-md-3 mx-4">
                <NewsItem title='My title' description='This is a news card'/>
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
