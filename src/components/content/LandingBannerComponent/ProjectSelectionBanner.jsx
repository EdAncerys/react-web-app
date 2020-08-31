import React, { useContext } from 'react';
import { AppContext } from '../../../App';
import SelectedProject from './SelectedProject';

export default function ProjectSelectionBanner({}) {
  const { projects } = useContext(AppContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        flex: 0,
      }}
    >
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
