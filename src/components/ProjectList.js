import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
 const projMap = projects.map(e=>(
   <ProjectItem key={e.id} name={e.name} about={e.about} technologies={e.technologies}></ProjectItem>
 ))
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projMap}</div>
    </div>
  );
}

export default ProjectList;
