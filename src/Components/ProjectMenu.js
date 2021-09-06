import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectMenu = () => (
    <ul className="nav-sub">
        <li>
                <NavLink  exact to="/projects/1"
                          activeClassName="selected">
                          Flickr Search
                </NavLink>
            </li>
            <li>
                <NavLink  exact to="/Portfolio/ACM"
                          activeClassName="selected">
                          ACM
                </NavLink>
            </li>
            <li>
                <NavLink  exact to="/Portfolio/SQLLibraryManager"
                          activeClassName="selected">
                          Library Manager
                </NavLink>
            </li>
    </ul>
)

export default ProjectMenu;