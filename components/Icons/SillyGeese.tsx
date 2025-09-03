import React from 'react';
import SillyGeeseSvg from './SillyGeese.svg';
import SillyGeeseColorSvg from './SillyGeeseColor.svg';

interface SillyGeeseProps {
  isColor?: boolean
  className?: string;
}

const SillyGeese: React.FC<SillyGeeseProps> = ({ className = '', isColor = false }) => {
  return (
    <div className={`silly-geese-wrapper ${className}`}>
      {isColor ? <SillyGeeseColorSvg /> : <SillyGeeseSvg /> }
    </div>
  )
};

export default SillyGeese;