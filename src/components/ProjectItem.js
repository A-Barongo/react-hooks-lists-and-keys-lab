import React from "react";

function ProjectItem({ name, about, technologies,id}) {
  return (
    <div className="project-item" key={id}>
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {technologies.map((technology)=><span key={technology}>{technology}</span>)}
      </div>
    </div>
  );
}

export default ProjectItem;
