import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Projects from './Components/Projects/ProjectGallery';
import Project from './Components/Projects/ProjectTemplate';

function App() {
  return (
    <div className="container">
        <Sidebar />
          <Switch>
            <Route  exact path="/projects/:id" 
                    component={Project}
            />
            <Route  exact path="/projects"
                    component={Projects}
            />
            <Route  exact path="/"
                    component={Home}
            />
          </Switch>
            
    </div>
  );
}

export default App;
