import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    return (
        <div className="card my-3" style={{width:"18rem"}}>
        <img src={this.props.urlToImage} alt={this.props.alt}/>
            <div className="card-body">
            <h5 className="card-title">{this.props.title.slice(0,45)}{this.props.title.slice(0,45).length>=45?"...":""}</h5>
            {/*Slice-> to make the title shorter, puts ... only if characters>45  */}
            <p className="card-text">{this.props.description.slice(0,88)}...</p>
            <a href={this.props.newsUrl} target="_blank" className="btn btn-primary">Read more</a>
            </div>
        </div>
    )
  }
}

export default NewsItem

