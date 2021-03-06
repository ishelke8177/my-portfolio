/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './project-card.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-info">
        <label className="project-links">{project.title}</label>
        <div className="project-links">
          {project.demo && (
            <a className="project-link" href={project.demo}>
              <div className="link-button">
                <i className="fi-rr-globe"></i>Demo
              </div>
            </a>
          )}

          {project.github && (
            <a className="project-link" href={project.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i>Github
              </div>
            </a>
          )}

          <p>{project.about}</p>
          <div className="project-tags">
            {project.tags.map((tag) => {
              return <label className="tag">{tag}</label>;
            })}
          </div>
        </div>
      </div>

      <img src={project.image} alt="Not found" className="project-photo" />
    </div>
  );
};

export default ProjectCard;
