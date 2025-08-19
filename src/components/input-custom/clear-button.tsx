import { X } from 'lucide-react';
import * as React from 'react';

interface ClearButtonProps {
  onClear: () => void;
}

export const ClearButton: React.FC<ClearButtonProps> = ({ onClear }) => {
  return (
    <button type='button' onClick={onClear} className='flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors'>
      <X className='h-4 w-4' />
    </button>
  );
};
