import React from 'react';
import ArticlePreview from './ArticlePreview';
import MediumArticle from './MediumArticle';

export default function MediumAricleComponent(props) {
  return (
    <div className="medium-page">
      {!props.selectedArticleId && (
        <ArticlePreview
          id={props.id}
          article={props.article}
          selectedArticle={props.selectedArticle}
        />
      )}
      {!!props.selectedArticleId && (
        <MediumArticle
          id={props.id}
          article={props.article}
          selectedArticle={props.selectedArticle}
          selectedArticleId={props.selectedArticleId}
          goToMediumPreviewPage={props.goToMediumPreviewPage}
        />
      )}
    </div>
  );
}
