import React from 'react';
import { projects } from '../../projects.json'

function ProjectGallery () {
  const projectArray = [];
  function generateProjectArray () {
    for (let i = 0; i < 8; i++) {
      projectArray.push([projects[i].project_name, projects[i].project_name_short]) 
    }
  }
  generateProjectArray()
  return (
    <>
    <header>
      <h1>Projects</h1>
    </header>
    <main>
        <div className="project-gallery">
            {projectArray.map((project, i) => {
              return (
                <div className="project-gallery-project-container">
                  <a href={`../projects/${i}`}>  
                    <img  key={i}
                          src={require(`../../images/projects/${project[1]}/thumbnail.jpg`).default}
                          alt={`${project[0]} Screenshot`}
                    />
                  </a>
                  <h2> {project[0]} </h2>
                </div>
              )
            })}
        </div>
    </main>
    </>
)
  }

export default ProjectGallery;