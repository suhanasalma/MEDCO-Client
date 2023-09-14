

import React from 'react';
import './ProgressBar.css'

const ProgressBar = ( {progress,currentStep,stepsName}) => {
 
  return (
    <div className='xl:hidden mt-10 px-6'>
      <div className="progress-bar " style={{ width: `${progress}%` }}></div>
      <div className="step-indicators ">
        {stepsName.map((step, index) => (
          <div onClick={step.show}
            key={index + 1}
            className={`step-indicator ${index <= currentStep - 1 ? 'active' : ''}`}
          >
            <span className='mt-10 ml-2 text-xs text-gray font-normal'>{step.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
