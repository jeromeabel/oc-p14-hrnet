import React from 'react';

interface InputProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
}

const Input2 = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      error,
      name,
      label,
      type = 'text',
      placeholder = '',
      required = true,
      ...rest
    },
    ref
  ) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-gray-600">
        {label} {required && '*'}
      </label>
      <input
        className="p-2 bg-gray-200 rounded focus:bg-gray-100 "
        name={name}
        id={name}
        type={type}
        ref={ref}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
        {...rest}
      />
      <p aria-live="polite" className="h-6">
        {error && (
          <span className="text-red-500 text-sm" role="alert">
            ⚠️ {error}
          </span>
        )}
      </p>
    </div>
  )
);

export default Input2;
