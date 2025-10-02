import { forwardRef } from 'react';

const Badge = forwardRef(({ variant = 'primary', size = 'sm', children, className = '', ...props }, ref) => {
  const baseClasses = 'inline-flex items-center rounded-full font-medium';

  const variants = {
    primary: 'bg-primary text-dark',
    secondary: 'bg-secondary text-text',
    accent: 'bg-accent text-dark',
    highlight: 'bg-highlight text-dark',
  };

  const sizes = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <span ref={ref} className={classes} {...props}>
      {children}
    </span>
  );
});

Badge.displayName = 'Badge';

export default Badge;
