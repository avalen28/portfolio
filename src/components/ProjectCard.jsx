import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const {
    img,
    name,
    definition,
    stack,
    video,
    FrontendDeploy,
    FrontendGit,
    BackendGit,
  } = project;
  return (
    <div className="project-card-container">
      <div className="project-card-header">
        <img src={img} alt="project-profile" />
        <h1>{name}</h1>
        <p>{definition}</p>
      </div>
      <div className="project-card-tech">
        <h3>The stack used in this app was</h3>
        <div className="project-card-stack">
          {stack.map((elem, i) => (
            <img src={elem} alt="stack" key={elem[i]} />
          ))}
        </div>
      </div>
      <div className="project-card-views">
        <img src={video} alt="app video" />
      </div>
      <div className="project-card-links">
        <Link to={FrontendDeploy}>Frontend Deploy</Link>
        <Link to={FrontendGit}>Frontend Github</Link>
        {BackendGit && <Link to={BackendGit}>Backend Github</Link>}
      </div>
    </div>
  );
};

export default ProjectCard;
