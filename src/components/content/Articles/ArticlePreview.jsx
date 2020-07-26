import React from 'react';

export default function ArticlePreview(props) {
  return (
    <div className="medium-preview">
      <h4
        className="medium-title"
        // onClick={this.props.selectedArticle.bind(this, id)}
        onClick={console.log(props.id)}
      >
        {props.title}
        {props.id}
      </h4>
    </div>
  );
}
