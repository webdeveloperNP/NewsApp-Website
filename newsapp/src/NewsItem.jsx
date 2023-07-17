import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    return (
        <div class="card my-3" style={{width:"18rem"}}>
        <img src={this.props.url} alt={this.props.alt}/>
            <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <p class="card-text">{this.props.description}</p>
            <a href="/" class="btn btn-primary">Read more</a>
            </div>
        </div>
    )
  }
}

export default NewsItem

