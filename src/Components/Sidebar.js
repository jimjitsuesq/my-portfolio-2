import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import ProjectMenu from './ProjectMenu';
import headShot from '../a3.jpg';

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const handleNavClick = () => {
    if (show) { 
      setShow(false);
    } else {
      setShow(true)
    }
  }
  return (
    <aside>
        <img className="left-sidebar-headshot" src={headShot} alt='Jim Peters' height='134px' width='111px' />
        <div className="left-sidebar-text-container">
            <h2>Jim Peters</h2>
            <h3>Full-Stack Developer</h3>
        </div>
        <ul className="left-sidebar-nav">
            <li>
                <NavLink  exact to="/"
                          activeClassName="selected">
                          Home
                </NavLink>
            </li>
            <li>
                <NavLink  exact to="/about"
                          activeClassName="selected">
                          About
                </NavLink>
            </li>
            <li>
                {/* <button onClick={handleNavClick}> Projects </button> */}
                <NavLink  exact to="/projects"
                          activeClassName="selected"
                          onClick={handleNavClick}>
                          Projects
                </NavLink>
            </li>
            { show ? <ProjectMenu /> : "" }
            <li>
                <NavLink  exact to="/contact"
                          activeClassName="selected">
                          Contact
                </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar;