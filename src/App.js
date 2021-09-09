import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LeftSidebar from './Components/LeftSidebar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Project from './Components/Projects/ProjectTemplate';
import ProjectGallery from './Components/Projects/ProjectGallery';

function App() {
  return (
    <div className="container">
        <LeftSidebar />
          <Switch>
            <Route  exact path="/projects/:id" 
                    component={Project}
            />
            <Route  exact path="/projects"
                    component={ProjectGallery}
            />
            <Route  exact path="/about"
                    component={About}
            />
            <Route  exact path="/contact"
                    component={Contact}
            />
            <Route  exact path="/"
                    component={Home}
            />
          </Switch>
    </div>
  );
}

export default App;
