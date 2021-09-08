import React, {useState} from 'react';
import { useParams } from 'react-router';
import DOMPurify from 'dompurify';

import { projects } from '../../projects.json'
import { logos } from '../../logos.json'
import RightSidebar from './RightSidebar';

const ProjectTemplate = (props) => {
  const [show, setShow] = useState(false);
  const [screenshot, setScreenshot] = useState();
  let { id } = useParams();
  
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
            <div className="project-technology-box" id="built-technology">
              <h3>Built Using</h3>
              <div className="project-technology-box-logo-container">
                {projects[id].built_technologies.map((technology, i) => {
                    return (
                      <img  
                            key={i}
                            src={require(`../../images/projects/logos/${logos[projects[id].built_technologies[i][1]].logo_name}.svg`).default} 
                            alt={`${logos[projects[id].built_technologies[i][1]].logo_alt}`} 
                            height={`${logos[projects[id].built_technologies[i][1]].logo_height}`}
                            style={{paddingTop: `${logos[projects[id].built_technologies[i][1]].logo_padding_top}`, paddingRight: `${logos[projects[id].built_technologies[i][1]].logo_padding_right}`, paddingBottom: `${logos[projects[id].built_technologies[i][1]].logo_padding_bottom}`, paddingLeft: `${logos[projects[id].built_technologies[i][1]].logo_padding_left}`}}
                            
                      />
                    )
                })}
              </div>
            </div>
            <div className="project-technology-box" id="deployed-technology">
              <h3>Deployed With</h3>
              <div className="project-technology-box-logo-container">
                {projects[id].deployed_technologies.map((technology, i) => {
                    return (
                    <img  
                          key={i}
                          src={require(`../../images/projects/logos/${logos[projects[id].deployed_technologies[i][1]].logo_name}.svg`).default} 
                          alt={`${logos[projects[id].deployed_technologies[i][1]].logo_alt}`} 
                          height={`${logos[projects[id].deployed_technologies[i][1]].logo_height}`}
                          style={{paddingTop: `${logos[projects[id].deployed_technologies[i][1]].logo_padding_top}`, paddingRight: `${logos[projects[id].deployed_technologies[i][1]].logo_padding_right}`, paddingBottom: `${logos[projects[id].deployed_technologies[i][1]].logo_padding_bottom}`, paddingLeft: `${logos[projects[id].deployed_technologies[i][1]].logo_padding_left}`}}
                    />
                    )
                })}
              </div>
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
              </div> : '' }
  </>
)};

export default ProjectTemplate;