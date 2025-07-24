import React from 'react';
import Link from 'next/link';
import { IconComponents } from './IconSystem';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  icon?: keyof typeof IconComponents;
  iconPosition?: 'left' | 'right';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  ariaLabel?: string;
}

const buttonVariants = {
  primary: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 border-red-600',
  secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500 border-gray-600',
  outline: 'bg-transparent text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500',
  ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 border-transparent',
  danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 border-red-500',
};

const buttonSizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
  xl: 'px-8 py-4 text-xl',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className = '',
  type = 'button',
  fullWidth = false,
  ariaLabel,
}: ButtonProps) {
  const baseClasses = [
    'inline-flex items-center justify-center font-semibold rounded-lg',
    'transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'transform hover:-translate-y-1 hover:shadow-lg',
    buttonVariants[variant],
    buttonSizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');

  const IconComponent = icon ? IconComponents[icon] : null;

  const content = (
    <>
      {loading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {!loading && icon && iconPosition === 'left' && IconComponent && (
        <IconComponent size="sm" className="mr-2" />
      )}
      {children}
      {!loading && icon && iconPosition === 'right' && IconComponent && (
        <IconComponent size="sm" className="ml-2" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClasses}
        aria-label={ariaLabel}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      aria-label={ariaLabel}
      aria-busy={loading}
    >
      {content}
    </button>
  );
}

// Export commonly used button combinations
export const ButtonComponents = {
  Primary: (props: Omit<ButtonProps, 'variant'>) => <Button variant="primary" {...props} />,
  Secondary: (props: Omit<ButtonProps, 'variant'>) => <Button variant="secondary" {...props} />,
  Outline: (props: Omit<ButtonProps, 'variant'>) => <Button variant="outline" {...props} />,
  Ghost: (props: Omit<ButtonProps, 'variant'>) => <Button variant="ghost" {...props} />,
  Danger: (props: Omit<ButtonProps, 'variant'>) => <Button variant="danger" {...props} />,
  
  // Pre-configured buttons
  CTA: (props: Omit<ButtonProps, 'variant' | 'size' | 'icon'>) => (
    <Button variant="primary" size="lg" icon="Rocket" {...props} />
  ),
  LearnMore: (props: Omit<ButtonProps, 'variant' | 'icon' | 'iconPosition'>) => (
    <Button variant="outline" icon="ArrowRight" iconPosition="right" {...props} />
  ),
  Back: (props: Omit<ButtonProps, 'variant' | 'icon' | 'iconPosition'>) => (
    <Button variant="ghost" icon="ArrowLeft" iconPosition="left" {...props} />
  ),
  Contact: (props: Omit<ButtonProps, 'variant' | 'icon'>) => (
    <Button variant="primary" icon="Phone" {...props} />
  ),
  WhatsApp: (props: Omit<ButtonProps, 'variant' | 'icon'>) => (
    <Button variant="primary" icon="WhatsApp" {...props} />
  ),
}; 