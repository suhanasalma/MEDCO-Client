

import React, { useState } from 'react';
import './ProgressBar.css'

const ProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const stepsName = ["Regions", "Organs", "Symptoms", "Doctor"];
  const totalSteps = stepsName.length;

  // Calculate progress percentage
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div>
      <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      <div className="step-indicators">
        {stepsName.map((step, index) => (
          <div
            key={index + 1}
            className={`step-indicator ${
              currentStep === index ? 'active' : ''
            }`}
          >
            <span className='mt-10'>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
