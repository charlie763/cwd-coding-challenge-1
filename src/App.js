import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/home/index'
import About from './components/about/index'
import Contact from './components/contact/index'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>        
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>        
      </Switch>
    </Router>
  );
}

export default App;
