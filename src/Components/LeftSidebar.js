import { useState, useLayoutEffect, useCallback } from "react";
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
  useLayoutEffect(() => {
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
            About Me
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
            Contact Me
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/resume" activeClassName="selected">
            My Resume
          </NavLink>
        </li>
      </ul>
      <div className="left-sidebar-text-container">
        <h4>Contact Info</h4>
        <p>
          <a href="mailto: jim@jimpeters.dev">Jim@JimPeters.dev</a>
        </p>
        <p>
          <a href="tel:805-263-7140">(805) 263-7140</a>
        </p>
      </div>
    </aside>
  );
};

export default LeftSidebar;
