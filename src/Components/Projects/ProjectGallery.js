import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../../projects.json'

function ProjectGallery (props) {
  const projectArray = [];
  function generateProjectArray () {
    for (let i = 0; i < 8; i++) {
      projectArray.push([projects[i].project_name, projects[i].project_name_path]) 
    }
  }
  generateProjectArray()
  return (
    <main>
      <div className="project-gallery-grid">
        <div className="project-gallery-header">
          <h1>Projects</h1>
        </div>
        <div className="project-gallery-wrapper">
          {projectArray.map((project, i) => {
            return (
              <div className="project-gallery-project-container" key={i}>
                <Link to={`../projects/${i}`}>  
                  <img  src={require(`../../images/projects/${project[1]}/thumbnail.jpg`).default}
                        alt={`${project[0]} Screenshot`}
                        key={i}
                        width={300}
                        height={195}
                  />
                </Link>
                <h2> {project[0]} </h2>
              </div>
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default ProjectGallery;