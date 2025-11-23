import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  // Calculate percentage: (currentStep + 1) / totalSteps * 100
  // But visually, we might want it to start small. Let's map steps 0, 1, 2 to 33%, 66%, 100%
  const percentage = Math.round(((currentStep + 1) / totalSteps) * 100);

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-8">
      <div
        className="bg-primary h-2.5 rounded-full transition-all duration-500 ease-out"
        style={{ width: `${percentage}%` }}
      ></div>
      <p className="text-right text-xs text-slate-500 mt-2">
        {percentage}% 완료
      </p>
    </div>
  );
};

export default ProgressBar;