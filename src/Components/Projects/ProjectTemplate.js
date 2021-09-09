import React, {useState} from 'react';
import { useParams } from 'react-router';
import DOMPurify from 'dompurify';

import { projects } from '../../projects.json'
import RightSidebar from './RightSidebar';
import TechnologyBox from './TechnologyBox';

const ProjectTemplate = (props) => {
  const [show, setShow] = useState(false);
  const [screenshot, setScreenshot] = useState();
  let { id } = useParams();
  let currentProject = projects[id]
  let builtTechnologies = currentProject.built_technologies
  let deployedTechnologies= currentProject.deployed_technologies
  
  const handlePicClick = (e) => {
    if (show) {
      setShow(false);
    } else {
      setScreenshot(require(`../../images/projects/${currentProject.project_name_path}/${e.target.alt}.jpg`))
      setShow(true);
    }
  }
  function generateDescription () {
    const description = currentProject.description;
    const sanitizer = DOMPurify.sanitize;
    return (
      <div dangerouslySetInnerHTML={{__html: sanitizer(`${description}`)}} /> 
    )
  }
  return (
    <>
      <header>
        <h1>{`${currentProject.project_name}`}</h1>
      </header>
      <main>
        <div className="main-project-wrapper">
            <div className="main-grid">
              <div className="main-project-text-box">
                {generateDescription()}
              </div>
              <RightSidebar id={id} 
                            onClickPic={handlePicClick}
              />
              <div className="main-project-technology-wrapper">
              <div className="main-project-technology-container">
                <TechnologyBox  title={"Built With"}
                                type={builtTechnologies}
                />
              </div>
              <div className="main-project-technology-container">
                <TechnologyBox  title={"Deployed With"}
                                type={deployedTechnologies}
                />
              </div>
              </div>
            </div>
        </div>
      </main>
      {  show ? <div  className='screenshot-modal' 
                      onClick={handlePicClick}>
                        <img  
                          src={screenshot.default}
                          alt={"Full-Size Screenshot"}
                        /> 
                </div> : '' 
      }
    </>
  )
};

export default ProjectTemplate;