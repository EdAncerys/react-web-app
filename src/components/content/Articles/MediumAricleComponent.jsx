import React from 'react';
import ArticlePreview from './ArticlePreview';
import MediumArticle from './MediumArticle';

export default function MediumAricleComponent(props) {
  return (
    <div className="medium-page">
      {!props.selectedArticleId && (
        <ArticlePreview
          id={props.id}
          thumbnail={props.article.thumbnail}
          title={props.article.title}
          selectedArticle={props.selectedArticle}
        />
      )}
      {props.selectedArticleId && (
        <MediumArticle
          id={props.id}
          article={props.article}
          selectedArticle={props.selectedArticle}
          selectedArticleId={props.selectedArticleId}
        />
      )}
    </div>
  );
}
