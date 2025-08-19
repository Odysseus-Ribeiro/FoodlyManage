import { cn } from '@/lib';
import * as React from 'react';
import type { InputState } from '.';

interface InputHelperTextProps {
  children: React.ReactNode;
  state?: InputState;
  className?: string;
}

const stateStyles = {
  default: 'text-muted-foreground',
  error: 'text-destructive',
  success: 'text-green-600',
  warning: 'text-orange-600',
};

export const InputHelperText: React.FC<InputHelperTextProps> = ({ children, state = 'default', className }) => {
  return <p className={cn('text-xs mt-1', stateStyles[state], className)}>{children}</p>;
};
