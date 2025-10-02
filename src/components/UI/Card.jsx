import { forwardRef } from 'react';

const Card = forwardRef(({ children, className = '', ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`rounded-lg border border-primary bg-dark p-4 shadow-lg transition-all hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

export default Card;
