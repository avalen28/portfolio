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
        <h1>{definition}</h1>
      </div>
      <div className="project-card-tech">
        <h3>explicación a nivel tech</h3>
        <div className="project-card-stack">
          {stack.map((elem, i) => (
            <p key={elem[i]}>{elem}</p>
          ))}
        </div>
      </div>
      <div className="project-card-views">
        <p>{video}</p>
      </div>
      <div className="project-card-links">
        <Link to={FrontendDeploy}>Frontend Deploy</Link>
        <Link to={FrontendGit}>Frontend Github</Link>
        <Link to={BackendGit}>Backend Github</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
