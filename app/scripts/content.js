import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import About from './aboutMe';
import Projects from './projects';
import Resume from './resume';
import Contact from './contact';

const Content = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/projects" component={Projects}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </main>
);

export default Content;
