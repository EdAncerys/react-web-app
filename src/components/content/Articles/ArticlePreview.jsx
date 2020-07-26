import React from 'react';

export default function ArticlePreview(props) {
  return (
    <React.Fragment>
      <img className="medium-img" src={props.thumbnail} alt={props.title} />
      <h4
        className="medium-title"
        onClick={() => props.selectedArticle(props.id)}
      >
        {props.title}
      </h4>
    </React.Fragment>
  );
}
