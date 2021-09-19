import { useState, useLayoutEffect, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";

import ProjectMenu from "./ProjectMenu";
import headShot from "../a3.JPG";

const LeftSidebar = () => {
  const [show, setShow] = useState(false);
  let location = useLocation();
  let subMenu = document.getElementById('subMenu');

  const showMenu = useCallback(() => {
    subMenu.className = "left-sidebar-nav-sub-visible";
  }, [subMenu]);

  function scrollPageTop () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  const handleNavClickProjects = () => {
    if (show) {
      setShow(false);
      subMenu.className = "left-sidebar-nav-sub-invisible";
    } else {
      setShow(true);
      showMenu();
    }
  };

  const checkPage = useCallback(() => {
    if (location.pathname.includes("projects/")) {
      setShow(true);
      showMenu();
    }
  }, [location, showMenu]);

  useLayoutEffect(() => {
    subMenu = document.getElementById('subMenu')
    scrollPageTop()
    checkPage();
  }, [checkPage, subMenu]);

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
        <ProjectMenu />
        <li>
          <NavLink exact to="/skills" activeClassName="selected">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact" activeClassName="selected">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/resume" activeClassName="selected">
            Resume
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
