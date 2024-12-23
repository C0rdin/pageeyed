import React from 'react';
import { Layers } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "flex items-center", 
  iconClassName = "w-8 h-8", 
  textClassName = "text-2xl font-bold ml-2" 
}) => {
  return (
    <div className={className}>
      <Layers className={`${iconClassName} text-indigo-600`} />
      <span className={`${textClassName} bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text`}>
        Pageey
      </span>
    </div>
  );
};