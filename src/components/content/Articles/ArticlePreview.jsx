import React from 'react';

export default function ArticlePreview(props) {
  return (
    <div className="article-preview">
      <img
        className="medium-img"
        src={props.article.thumbnail}
        alt={props.title}
      />
      <h4
        className="medium-title"
        onClick={() => props.selectedArticle(props.id)}
      >
        {props.article.title}
      </h4>
    </div>
  );
}
