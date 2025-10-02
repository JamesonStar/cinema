import { forwardRef, useEffect } from 'react';

const Modal = forwardRef(({ isOpen, onClose, title, children, className = '', ...props }, ref) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div
        ref={ref}
        className={`relative max-w-md w-full mx-4 rounded-lg border border-primary bg-dark p-6 shadow-xl ${className}`}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {title && <h2 className="mb-4 text-lg font-bold text-text">{title}</h2>}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-text hover:text-primary transition-colors"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
});

Modal.displayName = 'Modal';

export default Modal;
