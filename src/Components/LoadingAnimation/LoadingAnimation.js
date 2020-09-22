import React from 'react';

import './LoadingAnimation.scss';
import { FaSpinner } from 'react-icons/fa';

const LoadingAnimation = () => {
  return (
    <div className="loading-animation-container">
      <FaSpinner />
    </div>
  )
}

export default LoadingAnimation;
