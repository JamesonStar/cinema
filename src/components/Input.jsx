import { forwardRef } from 'react';

const Input = forwardRef(({ label, type = 'text', placeholder = '', className = '', ...props }, ref) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 text-sm font-medium text-text">{label}</label>}
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className="rounded-md border border-primary bg-dark px-3 py-2 text-text placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition"
        {...props}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
