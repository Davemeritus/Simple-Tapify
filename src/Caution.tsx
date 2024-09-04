import React from 'react';
import { CautionProps } from './utils/types';

const Caution: React.FC<CautionProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#dfe6e9]">
      <h1 className="text-3xl font-bold text-[#2d3436]">PLAY ON YOUR MOBILE</h1>
    </div>
  );
};

export default Caution;

