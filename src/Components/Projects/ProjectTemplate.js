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
  let builtTechnologies = projects[id].built_technologies
  
  let deployedTechnologies= projects[id].deployed_technologies
  const handlePicClick = (e) => {
    if (show) {
      setShow(false);
    } else {
      setScreenshot(require(`../../images/projects/${projects[id].project_name_short}/${e.target.alt}.jpg`))
      setShow(true);
    }
  }
  function generateDescription () {
    const description = projects[id].description;
    const sanitizer = DOMPurify.sanitize;
    return (
      <div dangerouslySetInnerHTML={{__html: sanitizer(`${description}`)}} /> 
    )
  }
  return (
    <>
      <header>
        <h1>{`${projects[id].project_name}`}</h1>
      </header>
      <main>
        <div className="project-container">
            <div className="main-grid">
              <div className="project-text-container">
                {generateDescription()}
              </div>
              <RightSidebar id={id} 
                            onClickPic={handlePicClick}
              />
              <div className="project-technology-container">
                <TechnologyBox  title={"Built With"}
                                type={builtTechnologies}
                />
                <TechnologyBox  title={"Deployed With"}
                                type={deployedTechnologies}
                />
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