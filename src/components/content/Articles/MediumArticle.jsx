import React from 'react';
import ReactHtmlParser from 'react-html-parser';

export default function MediumArticle(props) {
  return (
    <div className="medium-article">
      {props.id === props.selectedArticleId && (
        <React.Fragment>
          <p
            className="project-name back-link"
            onClick={props.goToMediumPreviewPage}
          >
            Back To Articles
          </p>
          <h4 className="medium-title">{props.article.title}</h4>
          {ReactHtmlParser(props.article.description)}
          <p className="align-left">
            Published by: {props.article.author} on {props.article.pubDate}
          </p>
          <p
            className="project-name back-link"
            onClick={props.goToMediumPreviewPage}
          >
            Back To Articles
          </p>
        </React.Fragment>
      )}
    </div>
  );
}
