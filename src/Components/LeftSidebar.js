import { useState, useEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";

import ProjectMenu from "./ProjectMenu";
import headShot from "../a3.JPG";

const LeftSidebar = () => {
  const [show, setShow] = useState(false);
  let location = useLocation();
  const handleNavClickProjects = () => {
    if (show) {
      setShow(false);
    } else {
      setShow(true);
    }
  };
  const handleNavClickFromProjects = () => {
    setShow(true);
  };
  const checkPage = useCallback(() => {
    if (location.pathname.includes("projects/")) {
      setShow(true);
    }
  }, [location]);
  useEffect(() => {
    checkPage();
  }, [checkPage]);

  return (
    <aside>
      <img
        className="left-sidebar-headshot"
        src={headShot}
        alt="Jim Peters"
        width="160px"
      />
      <div className="left-sidebar-text-container">
        <h2>Jim Peters</h2>
        <h3>Full-Stack Developer</h3>
      </div>
      <ul className="left-sidebar-nav">
        <li>
          <NavLink exact to="/" activeClassName="selected">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/about" activeClassName="selected">
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            activeClassName="selected"
            onClick={handleNavClickProjects}
          >
            Projects
          </NavLink>
        </li>
        {show ? <ProjectMenu onClick={handleNavClickFromProjects} /> : ""}
        <li>
          <NavLink exact to="/contact" activeClassName="selected">
            Contact
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default LeftSidebar;
