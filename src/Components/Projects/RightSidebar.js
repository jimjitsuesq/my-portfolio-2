import React from 'react';

import { projects } from '../../projects.json'

function RightSidebar (props) {
  const screenshotsArray = [];
  function generateScreenshotsArray () {
    for (let i = 0; i < projects[props.id].screenshots; i++) {
      screenshotsArray.push(require(`../../images/projects/${projects[props.id].project_name_short}/screenshot${i+1}.jpg`)) 
    }
  }
  generateScreenshotsArray();
  return (
    <div className="right-sidebar">
          <div className="right-sidebar-links">
            {`${projects[props.id].github_server_link}` === '0' ? 
              <a href={`${projects[props.id].github_client_link}`} 
                  target="_blank" 
                  rel="noreferrer">
                  Github
              </a>
              :
              <a  
                  href={`${projects[props.id].github_client_link}`} 
                  target="_blank" 
                  rel="noreferrer">
                  Github-Client
              </a>
            }
            {`${projects[props.id].github_server_link}` === '0' ? '' :
              <a  style={{marginBottom: 10}}
                href={`${projects[props.id].github_server_link}`} 
                target="_blank" 
                rel="noreferrer">
                Github-Server
              </a>
            }
            <a  
                href={`${projects[props.id].live_demo}`} 
                target="_blank"   
                rel="noreferrer">
                Live Demo
            </a>
          </div>
          <div className="right-sidebar-screenshots">
            {screenshotsArray.map((photo, i) => {
              return (
                <img  
                      key={i}
                      src={photo.default} 
                      alt={`screenshot${i+1}`} 
                      width="300px"
                      onClick={props.onClickPic}
                />
              )
            })}
      </div>
    </div>
)};

export default RightSidebar;