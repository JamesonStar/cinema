import { forwardRef } from 'react';

const Button = forwardRef(({ variant = 'primary', size = 'md', children, className = '', ...props }, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-primary text-dark hover:bg-primary/90 focus:ring-primary',
    secondary: 'bg-secondary text-text hover:bg-secondary/90 focus:ring-secondary',
    accent: 'bg-accent text-dark hover:bg-accent/90 focus:ring-accent',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-dark focus:ring-primary',
    ghost: 'text-text hover:bg-dark/50 focus:ring-text',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
