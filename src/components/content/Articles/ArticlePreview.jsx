import React from 'react';

export default function ArticlePreview(props) {
  return (
    <div className="medium-preview">
      <h4
        className="medium-title"
        onClick={() => props.selectedArticle(props.id)}
      >
        {props.title}
        <br />
        {props.id}
        <br />
        {props.selectedArticleId}
      </h4>
    </div>
  );
}

// import React, { Component } from 'react';

// export default class ArticlePreview extends Component {
//   render() {
//     return (
//       <div className="medium-preview">
//         <h4
//           className="medium-title"
//           onClick={this.props.selectedArticle.bind(this, this.props.id)}
//           onClick={() => console.log(this.props.id)}
//         >
//           {this.props.title}
//           <br />
//           {this.props.id}
//           <br />
//           'id passed'
//           {this.props.selectedArticleId}
//         </h4>
//       </div>
//     );
//   }
// }
