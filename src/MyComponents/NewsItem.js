import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageUrl,newsUrl,author,date,source}=this.props;
        return (
            <div className="my-3">
                <div className="card" style={{width : "18rem"}}>
                    <img src={!imageUrl ?"https://cdn.theathletic.com/app/uploads/2023/07/25212717/GettyImages-1554966078.jpg":imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title} <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                            {source}</span></h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-secondary">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target='_target' className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
