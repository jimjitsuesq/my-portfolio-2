import React from "react";

import { projects } from "../../projects.json";

function RightSidebar(props) {
  const currentProject = projects[props.id];
  const screenshotsArray = [];
  function generateScreenshotsArray() {
    for (let i = 0; i < currentProject.screenshots; i++) {
      screenshotsArray.push(
        require(`../../images/projects/${
          currentProject.project_name_path
        }/thumbnail${i + 1}.jpg`)
      );
    }
  }
  generateScreenshotsArray();
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-links-container">
        {`${currentProject.github_server_link}` === "0" ? (
          <a
            href={`${currentProject.github_client_link}`}
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        ) : (
          <a
            href={`${currentProject.github_client_link}`}
            target="_blank"
            rel="noreferrer"
          >
            Github-Client
          </a>
        )}
        {`${currentProject.github_server_link}` === "0" ? (
          ""
        ) : (
          <a
            style={{ marginBottom: 10 }}
            href={`${currentProject.github_server_link}`}
            target="_blank"
            rel="noreferrer"
          >
            Github-Server
          </a>
        )}
        <a
          href={`${currentProject.live_demo}`}
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </a>
      </div>
      <div className="right-sidebar-screenshots-container">
        {screenshotsArray.map((photo, i) => {
          return (
            <img
              key={i}
              src={photo.default}
              alt={`screenshot${i + 1}`}
              width="300px"
              onClick={props.onClickPic}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RightSidebar;
