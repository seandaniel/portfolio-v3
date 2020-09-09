import React from 'react';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

// components
import Header from './Components/Header/Header.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="wrapper">
          <Header />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;