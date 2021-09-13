import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import LeftSidebar from "./Components/LeftSidebar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import ProjectGallery from "./Components/Projects/ProjectGallery";
import ProjectTemplate from "./Components/Projects/ProjectTemplate";

function App() {
  const location = useLocation();
  return (
    <div className="container">
      <LeftSidebar />
      <TransitionGroup>
        <CSSTransition timeout={4000} classNames="slide" key={location.key}>
          <Switch location={location}>
            <Route exact path="/projects/:id" component={ProjectTemplate} />
            <Route exact path="/projects" component={ProjectGallery} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="resume" component={Home} />
            <Route exact path="/" component={Home} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
