import React from 'react';

import './LoadingAnimation.scss';
import Mountains from './assets/mountains.svg';

const LoadingAnimation = () => {
  return (
    <div className="loading-animation-container">
      <img src={Mountains} alt="Three mountains with snow-peaked tops" />
    </div>
  )
}

export default LoadingAnimation;
