import { cn } from '@/lib';
import * as React from 'react';

interface InputLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
}

export const InputLabel: React.FC<InputLabelProps> = ({ children, className, ...props }) => {
  return (
    <label className={cn('block text-sm font-medium text-foreground mb-1', className)} {...props}>
      {children}
    </label>
  );
};
