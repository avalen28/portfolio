import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="project-container">
      <div className="project-header">
        <p>Without Signals</p>
        <p>Sushi Lovers</p>
        <p>Walk Away</p>
      </div>
      <ProjectCard />
    </div>
  );
};

export default Projects;
