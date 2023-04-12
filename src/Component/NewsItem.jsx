import React, { Component } from "react";

class NewsItem extends Component {
  convertDate = () => {
    var dateUTC = this.props.date;
    var dateIST = new Date(dateUTC).toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    return dateIST;
  };
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <>
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                Published on {this.convertDate()}
              </small>
            </p>
            <a href={newsUrl} target="/blank" className="btn btn-primary">
              Want more
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
