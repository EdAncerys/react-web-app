import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function ArticlePreview(props) {
  return (
    <div
      onClick={() => props.selectedArticle(props.id)}
      className="article-preview"
    >
      <h4
        className="medium-title"
        onClick={() => props.selectedArticle(props.id)}
      >
        {props.article.title}
      </h4>
      <img
        className="medium-img"
        src={props.article.thumbnail}
        alt={props.title}
      />
      <div className="medium-article-preview">
        {ReactHtmlParser(props.article.description)}
      </div>
    </div>
  );
}
