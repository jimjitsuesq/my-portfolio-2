import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectMenu = () => (
  <ul className="nav-sub">
    <li>
        <NavLink  exact to="/projects/0"
                  activeClassName="selected">
                  ACM
        </NavLink>
    </li>
    <li>
        <NavLink  exact to="/projects/1"
                  activeClassName="selected">
                  Flickr Search
        </NavLink>
    </li>
    <li>
        <NavLink  exact to="/projects/2"
                  activeClassName="selected">
                  Book Collection
        </NavLink>
    </li>
    <li>
        <NavLink  exact to="/projects/3"
                  activeClassName="selected">
                  Phrase Hunter
        </NavLink>
    </li>
    <li>
        <NavLink  exact to="/projects/4"
                  activeClassName="selected">
                  Interactive Form
        </NavLink>
    </li>
    <li>
        <NavLink  exact to="/projects/5"
                  activeClassName="selected">
                  Employee Directory
        </NavLink>
    </li>
    <li>
        <NavLink  exact to="/projects/6"
                  activeClassName="selected">
                  Quote Generator
        </NavLink>
    </li>
    <li>
        <NavLink  exact to="/projects/7"
                  activeClassName="selected">
                  Student Directory
        </NavLink>
    </li>
  </ul>
)

export default ProjectMenu;