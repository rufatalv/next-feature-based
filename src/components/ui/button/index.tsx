import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'px-4 py-2 rounded-md font-medium transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${widthClass} ${className}`;
  
  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  );
}
