import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './scss/main.scss';

import Nav from './components/global/nav/index';
import Footer from './components/global/footer/index';

import Home from './components/home/index';
import About from './components/about/index';
import Contact from './components/contact/index';

function App() {
  return (
    <body>
      <Nav />
      <Router>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
      </Router>
      <Footer />
    </body>
  );
}

export default App;
