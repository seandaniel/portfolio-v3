import React from 'react';
import './global.scss';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Header from './Components/Header/Header.js';
import About from './Components/About/About.js';
import Projects from './Components/Projects/Projects.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <main>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Projects} />
          </main>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;