import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    return (
        <div class="card" style={{width:"18rem"}}>
        <img src="https://s.yimg.com/ny/api/res/1.2/qxqwDKvbkFRLdZQOvRWPcA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/92bc72b0-237a-11ee-bbbf-426f5a5c945f" class="card-img-top" alt="..."/>
            <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.description}</p>
            <a href="/" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
  }
}

export default NewsItem

