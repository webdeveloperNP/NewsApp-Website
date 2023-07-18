import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    return (
        <div className="card my-3" style={{width:"18rem"}}>
        <img src={this.props.url} alt={this.props.alt}/>
            <div className="card-body">
            <h5 className="card-title">{this.props.title}</h5>
            <p className="card-text">{this.props.description}</p>
            <a href="/" className="btn btn-primary">Read more</a>
            </div>
        </div>
    )
  }
}

export default NewsItem

