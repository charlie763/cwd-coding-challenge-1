import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './scss/main.scss';

import Nav from './components/global/nav/index';
import Footer from './components/global/footer/index';


function App() {
  return (
    <body>
      <Nav />
      <Router>

      </Router>
      <Footer />
    </body>
  );
}

export default App;
