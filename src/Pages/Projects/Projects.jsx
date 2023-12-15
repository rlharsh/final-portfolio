import React, { useEffect, useState } from "react";

import "./projects.css";
import { ProjectData } from "../../Data/NavData/ProjectData";
import Highlight from "react-highlight";
import Markdown from "marked-react";
import hljs from "highlight.js";
import "highlight.js/styles/tokyo-night-dark.css";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(null);
  const [viewState, setViewState] = useState(0);

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
            <div key={index} className="project">
              <div className="project-header">
                <img src={project.image} alt="PROJECT IMAGE" />
              </div>
              <div className="project-footer">
                <p>
                  {project.short_description.length < 100
                    ? project.short_description
                    : project.short_description.slice(0, 100) + "..."}
                </p>
                <div className="project-button-panel">
                  <button
                    className="btn"
                    onClick={() => {
                      setViewState(0);
                      setCurrentProject(project);
                    }}
                  >
                    <i className="ri-file-text-line"></i>
                  </button>
                  <button
                    className="btn"
                    onClick={(e) => {
                      if (window.innerWidth < 768) {
                        setCurrentProject(project);
                        setViewState(0);
                        window.open(project.view_url, "_blank");
                      } else {
                        setCurrentProject(project);
                        setViewState(1);
                      }
                    }}
                  >
                    <i className="ri-global-line"></i>
                  </button>
                  <button
                    className="btn"
                    onClick={(e) => {
                      setViewState(0);
                      window.open(project.code_url, "_blank");
                    }}
                  >
                    <i className="ri-github-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-container__right scrollbar">
        {currentProject ? (
          viewState === 0 ? (
            <div>
              <pre className="pre">
                <Highlight className="hljs md code-block">
                  {currentProject.long_description ||
                    "Select a project to view more information."}
                </Highlight>
              </pre>
            </div>
          ) : viewState === 1 ? (
            <iframe
              src={currentProject.view_url}
              title={currentProject.title}
              width="100%"
              height="100%"
            />
          ) : (
            <div>
              <pre className="pre">
                <Highlight className="hljs md code-block">
                  {currentProject.long_description ||
                    "Select a project to view more information."}
                </Highlight>
              </pre>
            </div>
          )
        ) : (
          viewState === 0 && (
            <Highlight className="hljs md code-block">
              Select a project to view more information.
            </Highlight>
          )
        )}
        {!currentProject && viewState !== 0 && <div>get wrecked</div>}
      </div>
    </div>
  );
};

export default Projects;
