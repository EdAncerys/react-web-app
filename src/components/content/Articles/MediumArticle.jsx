import React, { Component } from 'react';
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from 'react-html-parser';

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
        {ReactHtmlParser(description)}
        {/* <ReactMarkdown source={description} /> */}
        <p className="align-left">
          Published by: {author} on {pubDate}
        </p>
      </div>
    );
  }
}
