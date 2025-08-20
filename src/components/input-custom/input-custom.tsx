import { ClearButton, Input, InputHelperText, InputIcon, InputLabel } from '@/components';
import { cn } from '@/lib';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

const inputVariants = cva(
  'flex h-10 w-full rounded-md border border-border bg-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
  {
    variants: {
      size: {
        sm: 'h-8 px-2 text-xs',
        md: 'h-10 px-3 text-sm',
        lg: 'h-12 px-4 text-lg',
      },
      state: {
        default: '',
        error: 'border-destructive focus-visible:border-destructive focus-visible:ring-destructive/20',
        success: 'border-green-500 focus-visible:border-green-500 focus-visible:ring-green-500/20',
        warning: 'border-orange-500 focus-visible:border-orange-500 focus-visible:ring-orange-500/20',
      },
      variant: {
        default: '',
        filled: 'bg-muted border-transparent focus-visible:border-input',
        ghost: 'border-transparent bg-transparent focus-visible:border-input',
      },
      hasLeftIcon: {
        true: 'pl-10',
      },
      hasRightContent: {
        true: 'pr-10',
      },
      hasDropShadow: {
        true: 'shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]',
      },
    },
    defaultVariants: {
      size: 'md',
      state: 'default',
      variant: 'default',
    },
  }
);

export type InputState = NonNullable<VariantProps<typeof inputVariants>['state']>;

export interface InputCustomProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, VariantProps<typeof inputVariants> {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftIconClick?: () => void;
  onRightIconClick?: () => void;
  containerClassName?: string;
  clearable?: boolean;
  onClear?: () => void;
  helperText?: string;
  label?: string;
  loading?: boolean;
}

export const InputCustom = React.forwardRef<HTMLInputElement, InputCustomProps>(
  (
    {
      leftIcon,
      rightIcon,
      onLeftIconClick,
      onRightIconClick,
      containerClassName,
      clearable,
      onClear,
      className,
      value,
      state,
      helperText,
      label,
      id,
      size,
      variant,
      hasDropShadow,
      loading,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const currentValue = value || '';
    const hasValue = String(currentValue).length > 0;

    const handleClear = () => {
      if (onClear) {
        onClear();
      }
    };

    const handleIconClick = (callback?: () => void) => {
      if (callback && !disabled) {
        callback();
      }
    };

    const hasRightContent = loading || (clearable && hasValue && !disabled) || rightIcon;

    const renderRightContent = () => {
      if (loading) {
        return <div className='animate-spin h-4 w-4 border-2 border-gray-400 border-t-transparent rounded-full mr-3' />;
      }

      if (clearable && hasValue && !disabled) {
        return (
          <div className='mr-3'>
            <ClearButton onClear={handleClear} />
          </div>
        );
      }

      if (rightIcon) {
        return (
          <div
            className={cn('flex items-center text-muted-foreground mr-3', onRightIconClick && 'cursor-pointer hover:text-foreground transition-colors')}
            onClick={() => handleIconClick(onRightIconClick)}>
            {rightIcon}
          </div>
        );
      }

      return null;
    };

    return (
      <div className={cn('relative w-full', containerClassName)}>
        {label && <InputLabel htmlFor={inputId}>{label}</InputLabel>}
        <div className='relative'>
          <Input
            ref={ref}
            id={inputId}
            value={value}
            disabled={disabled || loading}
            className={cn(
              inputVariants({
                size,
                state,
                variant,
                hasLeftIcon: !!leftIcon,
                hasRightContent: !!hasRightContent,
                hasDropShadow,
              }),
              className
            )}
            {...props}
          />
          {leftIcon && (
            <InputIcon position='left' onClick={onLeftIconClick ? () => handleIconClick(onLeftIconClick) : undefined}>
              {leftIcon}
            </InputIcon>
          )}
          {hasRightContent && <div className='absolute right-0 top-0 h-full flex items-center'>{renderRightContent()}</div>}
        </div>
        {helperText && <InputHelperText state={state || 'default'}>{helperText}</InputHelperText>}
      </div>
    );
  }
);

InputCustom.displayName = 'InputCustom';
