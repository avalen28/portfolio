import React from "react";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects.json";

const Projects = () => {
  const [project, setProject] = useState(null);
  return (
    <div className="project-container">
      <div className="project-header">
        <button onClick={() => setProject(projects[0])}>Without Signals</button>
        <button onClick={() => setProject(projects[1])}>Sushi Lovers</button>
        <button onClick={() => setProject(projects[2])}>Walk Away</button>
      </div>
      {!project && <h3>Check my projects clicking on it</h3>}

      {project && <ProjectCard project={project} />}
    </div>
  );
};

export default Projects;
