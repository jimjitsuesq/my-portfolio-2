import React from "react";
import { NavLink } from "react-router-dom";
import { projects } from "../projects.json";

function ProjectMenu(props) {
  const projectArray = [];
  function generateProjectArray() {
    for (let i = 0; i < projects.length; i++) {
      projectArray.push(projects[i].project_name_short);
    }
  }
  generateProjectArray();
  return (
    <ul id="subMenu" className="left-sidebar-nav-sub-invisible">
      {projectArray.map((project, i) => {
        return (
          <li key={i}>
            <NavLink
              key={i}
              exact
              to={`/projects/${i}`}
              activeClassName="selected"
            >
              {`${project}`}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default ProjectMenu;
