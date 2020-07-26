import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function MediumArticle(props) {
  return (
    <div className="medium-article">
      {/* {props.article.forEach((article) => {
        article.title;
      })} */}
      {props.id === props.selectedArticleId && (
        <React.Fragment>
          <img
            className="medium-img"
            src={props.article.thumbnail}
            alt={props.article.title}
          />
          <h4 className="medium-title">{props.article.title}</h4>
          {ReactHtmlParser(props.article.description)}
          <p className="align-left">
            Published by: {props.article.author} on {props.article.pubDate}
          </p>
        </React.Fragment>
      )}
    </div>
  );
}
