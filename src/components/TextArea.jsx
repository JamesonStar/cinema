import { forwardRef } from 'react';

const TextArea = forwardRef(({ label, placeholder = '', rows = 4, className = '', ...props }, ref) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 text-sm font-medium text-text">{label}</label>}
      <textarea
        ref={ref}
        placeholder={placeholder}
        rows={rows}
        className="rounded-md border border-primary bg-dark px-3 py-2 text-text placeholder:text-gray-400 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition resize-none"
        {...props}
      />
    </div>
  );
});

TextArea.displayName = 'TextArea';

export default TextArea;
