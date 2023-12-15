import React, { useEffect, useState } from "react";

import "./projects.css";
import { ProjectData } from "../../Data/NavData/ProjectData";
import Highlight from "react-highlight";
import Markdown from "marked-react";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    hljs.highlightAll();
  }, [currentProject]);

  return (
    <div className="projects-container">
      <div className="projects-container__left scrollbar">
        {ProjectData.map((project, index) => (
          <div className="project-top">
            <div className="project-top__info">
              <p className="project-top-name">{project.title}</p>
              <p className="project-top-slug">// {project.slug}</p>
            </div>
            <div
              key={index}
              className="project"
              onClick={() => setCurrentProject(project)}
            >
              <div className="project-header">
                <img src={project.image} alt="PROJECT IMAGE" />
              </div>
              <div className="project-footer">
                <p>
                  {project.short_description.length < 60
                    ? project.short_description
                    : project.short_description.slice(0, 60) + "..."}
                </p>
                <button
                  className="btn"
                  onClick={(e) => {
                    window.open(project.view_url, "_blank");
                  }}
                >
                  view-project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="projects-container__right scrollbar">
        {currentProject && (
          <div>
            <pre class="pre">
              <Highlight className="hljs md code-block">
                {currentProject.long_description ||
                  "**Select a project to view more information."}
              </Highlight>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
