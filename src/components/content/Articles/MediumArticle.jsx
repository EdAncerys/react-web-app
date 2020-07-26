import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import ArticlePreview from './ArticlePreview';

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
        {!this.props.selectedArticleId && <ArticlePreview title={title} />}
        {this.props.selectedArticleId && (
          <div className="medium-article">
            <img className="medium-img" src={thumbnail} alt="Medium Article" />
            <h4 className="medium-title">{title}</h4>
            {ReactHtmlParser(description)}
            <p className="align-left">
              Published by: {author} on {pubDate}
            </p>
          </div>
        )}
      </div>
    );
  }
}
