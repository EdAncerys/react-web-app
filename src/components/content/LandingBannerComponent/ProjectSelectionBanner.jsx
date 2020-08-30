// import React, { Component } from 'react';
// import SelectedProject from './SelectedProject';

// export default class SelectionBanner extends Component {
//   render() {
//     return (
//       <div className="selection-banner">
//         <div className="selection-title">
//           <h4 className="title-name">Featured Projects</h4>
//         </div>
//         {this.props.projects.map((project) => (
//           <SelectedProject
//             key={project.id}
//             project={project}
//             selectedProject={this.props.selectedProject}
//           />
//         ))}
//       </div>
//     );
//   }
// }

import React, { useContext } from 'react';
import { AppContext } from '../../../App';
import SelectedProject from './SelectedProject';
import colors from '../../../config/colors';

export default function ProjectSelectionBanner({}) {
  const { projects } = useContext(AppContext);

  return (
    <div style={styles.container}>
      {projects.map((project) => (
        <SelectedProject
          key={project.id}
          id={project.id}
          title={project.name}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'center',
    width: '90vw',
  },
};
