import { cn } from '@/lib';
import * as React from 'react';

interface InputIconProps {
  children: React.ReactNode;
  position: 'left' | 'right';
  onClick?: () => void;
  className?: string;
}

export const InputIcon: React.FC<InputIconProps> = ({ children, position, onClick, className }) => {
  return (
    <div
      className={cn(
        'absolute z-10 flex items-center text-muted-foreground top-1/2 -translate-y-1/2',
        position === 'left' ? 'left-3' : 'right-3',
        onClick && 'cursor-pointer hover:text-foreground transition-colors',
        className
      )}
      onClick={onClick}>
      {children}
    </div>
  );
};
