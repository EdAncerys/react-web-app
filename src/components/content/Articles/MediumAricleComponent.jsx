import React from 'react';
import ArticlePreview from './ArticlePreview';
import MediumArticle from './MediumArticle';

export default function MediumAricleComponent(props) {
  return (
    <div className="medium-page">
      {!props.selectedArticleId && (
        <ArticlePreview title={props.article.title} id={props.id} />
      )}
      {props.selectedArticleId && (
        <MediumArticle
          id={props.id}
          thumbnail={props.article.thumbnail}
          title={props.article.title}
          description={props.article.description}
          author={props.article.author}
          pubDate={props.article.pubDate}
        />
      )}
    </div>
  );
}
