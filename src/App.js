import React from 'react';
import './global.scss';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Header from './Components/Header/Header.js';
import About from './Components/About/About.js';
import Skills from './Components/Skills/Skills.js';
import Projects from './Components/Projects/Projects.js';
import Blog from './Components/Blog/Blog.js';
import GitCheck from './Components/Projects/GitCheck.js';
import Footer from './Components/Footer/Footer.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
          <main>
            <Route exact path="/about" component={About} />
            <Route exact path="/" component={Projects} />
            <Route exact path="/git-check" component={GitCheck} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/skills" component={Skills} />
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;