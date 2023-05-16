import React from 'react';

type Option = {
  value: string;
  label: string;
};

interface SelectProps {
  options: Option[];
  error?: string;
  name: string;
  label: string;
  required?: boolean;
}

// doc :  React.forwardRef<HTMLSelectElement, { label: string } & ReturnType<UseFormRegister<IFormValues>>
const Select2 = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, error, name, label, required = true, ...rest }, ref) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-gray-600">
        {label} {required && '*'}
      </label>
      <select
        {...rest}
        ref={ref}
        name={name}
        id={name}
        className="p-2 bg-gray-200 rounded focus:bg-gray-100 "
        aria-invalid={error ? 'true' : 'false'}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

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

export default Select2;
