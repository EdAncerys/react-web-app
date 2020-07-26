import React from 'react';

export default function ArticlePreview(props) {
  return (
    <div className="medium-preview">
      <h4
        className="medium-title"
        // onClick={this.props.selectedArticle.bind(this, id)}
      >
        {props.title}
      </h4>
    </div>
  );
}
