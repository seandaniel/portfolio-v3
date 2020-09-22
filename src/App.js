import React, { Suspense, lazy } from 'react';
import './global.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import LoadingAnimation from './Components/LoadingAnimation/LoadingAnimation.js';

const About = lazy(() => import('./Components/About/About.js'));
const Skills = lazy(() => import('./Components/Skills/Skills.js'));
const Projects = lazy(() => import('./Components/Projects/Projects.js'));
const Blog = lazy(() => import('./Components/Blog/Blog.js'));

const GitCheck = lazy(() => import('./Components/Projects/GitCheck.js'));
const TheSpecificPress = lazy(() => import('./Components/Projects/TheSpecificPress.js'));
const Verbeeks = lazy(() => import('./Components/Projects/Verbeeks.js'));
const QuarantinePursuit = lazy(() => import('./Components/Projects/QuarantinePursuit.js'));
const FootForward = lazy(() => import('./Components/Projects/FootForward.js'));
const SeamusGolf = lazy(() => import('./Components/Projects/SeamusGolf'));
const FunPlace = lazy(() => import('./Components/Projects/FunPlace'));

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="wrapper">
          <Header />
          <Suspense fallback={<LoadingAnimation />}>
            <Switch>
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
            </Switch>
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;