import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = () => {
  return (
    <div className="project-card-container">
      <div className="project-card-header">
        <img src="" alt="project-profile" />
        <h1>de qué va</h1>
      </div>
      <div className="project-card-tech">
        <h3>explicación a nivel tech</h3>
        <div className="project-card-stack">
          <p>JS</p>
          <p>CSS</p>
          <p>HTML5</p>
        </div>
      </div>
      <div className="project-card-views">
        <p>gif</p>
        <p>gif</p>
        <p>gif</p>
      </div>
      <div className="project-card-links">
        <Link to={"ruta a llevar"}>Frontend Deploy</Link>
        <Link to={"ruta a llevar"}>Frontend Github</Link>
        <Link to={"ruta a llevar"}>Backend Github</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
