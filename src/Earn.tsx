// Earn.tsx
import React from 'react';

interface EarnProps {
  onBack: () => void;
  onCompleteTask: () => void;
}

const Earn: React.FC<EarnProps> = ({ onBack, onCompleteTask }) => (
  <div className="bg-[#dfe6e9] text-[#2d3436] h-screen flex flex-col items-center justify-center">
    <h1 className="text-2xl font-bold mb-6">Tasks</h1>
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map(task => (
        <button
          key={task}
          className="bg-[#74b9ff] text-white py-2 px-4 rounded-full"
          onClick={() => {
            window.open('https://youtu.be/4bMOTTJqGgM?si=nGZFC9Fd2gGq5PyP', '_blank');
            onCompleteTask();
          }}
        >
          Task {task}
        </button>
      ))}
    </div>
    <button
      className="mt-6 bg-[#0984e3] text-white py-2 px-4 rounded-full"
      onClick={onBack}
    >
      Back
    </button>
  </div>
);

export default Earn;
