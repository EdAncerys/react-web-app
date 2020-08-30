// import React, { Component } from 'react';

// export default class ProjectItem extends Component {
//   render() {
//     const { id, name } = this.props.project;
//     return (
//       <div>
//         <p
//           onClick={this.props.selectedProject.bind(this, id)}
//           className="project-name"
//         >
//           {name}
//         </p>
//       </div>
//     );
//   }
// }

import React from 'react';

export default function ProjectItem({ project }) {
  return (
    <div style={styles.container}>
      <p
        // onClick={this.props.selectedProject.bind(this, id)}
        onClick={() => console.log(project.id)}
        className="project-name"
      >
        {project.name}
      </p>
    </div>
  );
}

const styles = {
  container: {},
};
