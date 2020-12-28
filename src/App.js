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
const Words = lazy(() => import('./Components/Words/Words.js'));

const GitCheck = lazy(() => import('./Components/Projects/GitCheck.js'));
const TheSpecificPress = lazy(() => import('./Components/Projects/TheSpecificPress.js'));
const Verbeeks = lazy(() => import('./Components/Projects/Verbeeks.js'));
const QuarantinePursuit = lazy(() => import('./Components/Projects/QuarantinePursuit.js'));
const FootForward = lazy(() => import('./Components/Projects/FootForward.js'));
const SeamusGolf = lazy(() => import('./Components/Projects/SeamusGolf'));
const RocketVision = lazy(() => import('./Components/Projects/RocketVision'));
const FunPlace = lazy(() => import('./Components/Projects/FunPlace'));

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="wrapper">
          <Header />
          <Suspense fallback={<LoadingAnimation />}>
            <main>
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/" component={Projects} />
                <Route exact path="/git-check" component={GitCheck} aria-label="View Git Check"/>
                <Route exact path="/the-specific-press" component={TheSpecificPress} aria-label="View The Specific Press"/>
                <Route exact path="/verbeeks" component={Verbeeks} aria-label="View Verbeek's"/>
                <Route exact path="/quarantine-pursuit" component={QuarantinePursuit} aria-label="View QuarantinePursuit"/>
                <Route exact path="/foot-forward" component={FootForward} aria-label="View Foot Forward"/>
                <Route exact path="/seamus-golf" component={SeamusGolf} aria-label="View Seamus Golf"/>
                <Route exact path="/rocket-vision" component={RocketVision} aria-label="View Rocket Vision"/>
                <Route exact path="/fun-place" component={FunPlace} aria-label="View Fun Place"/>
                <Route exact path="/words" component={Words} />
              </Switch>
            </main>
          </Suspense>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;