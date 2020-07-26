import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function MediumArticle(props) {
  return (
    <div className="medium-article">
      <img className="medium-img" src={props.thumbnail} alt="Medium Article" />
      <h4 className="medium-title">{props.title}</h4>
      {ReactHtmlParser(props.description)}
      <p className="align-left">
        Published by: {props.author} on {props.pubDate}
      </p>
    </div>
  );
}
