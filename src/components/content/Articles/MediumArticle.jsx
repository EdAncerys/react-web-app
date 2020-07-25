import React, { Component } from 'react';
// import ReactMarkdown from 'react-markdown';

export default class Article extends Component {
  render() {
    const {
      author,
      pubDate,
      title,
      description,
      thumbnail,
    } = this.props.article;

    return (
      <div className="medium-page">
        <div>
          <img className="medium-img" src={thumbnail} alt="Medium Article" />
        </div>
        <h4 className="medium-title">{title}</h4>
        <p
          // onClick={this.props.selectedProject.bind(this, id)}
          className="medium-description"
        >
          {description}
        </p>
        {/* <ReactMarkdown source={description} /> */}
        <p className="align-left">
          Published by: {author} on {pubDate}
        </p>
      </div>
    );
  }
}
