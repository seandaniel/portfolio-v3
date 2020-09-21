import React from 'react';
import './global.scss';
import { BrowserRouter, Route } from 'react-router-dom';

// components
import Header from './Components/Header/Header.js';
import About from './Components/About/About.js';
import Skills from './Components/Skills/Skills.js';
import Projects from './Components/Projects/Projects.js';
import Blog from './Components/Blog/Blog.js';
import Footer from './Components/Footer/Footer.js';

// projects
import GitCheck from './Components/Projects/GitCheck.js';
import TheSpecificPress from './Components/Projects/TheSpecificPress.js';
import Verbeeks from './Components/Projects/Verbeeks.js';
import QuarantinePursuit from './Components/Projects/QuarantinePursuit.js';
import FootForward from './Components/Projects/FootForward.js';
import SeamusGolf from './Components/Projects/SeamusGolf.js';
import FunPlace from './Components/Projects/FunPlace.js';


const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="wrapper">
          <Header />
          <main>
            <Route exact path="/about" component={About} />
            <Route exact path="/skills" component={Skills} />
            <Route exact path="/" component={Projects} />
            <Route exact path="/git-check" component={GitCheck} />
            <Route exact path="/the-specific-press" component={TheSpecificPress} />
            <Route exact path="/verbeeks" component={Verbeeks} />
            <Route exact path="/quarantine-pursuit" component={QuarantinePursuit} />
            <Route exact path="/foot-forward" component={FootForward} />
            <Route exact path="/seamus-golf" component={SeamusGolf} />
            <Route exact path="/fun-place" component={FunPlace} />
            <Route exact path="/blog" component={Blog} />
          </main>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;