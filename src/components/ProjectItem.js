import React from "react";

function ProjectItem({ name, about, technologies }) {
  const tecMap = technologies.map(e=>(
    <span key={e}>{e}</span>
  ))
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {tecMap}
      </div>
    </div>
  );
}

export default ProjectItem;
