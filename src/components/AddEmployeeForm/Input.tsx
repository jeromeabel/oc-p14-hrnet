/**
 * Input component for rendering an input field with label and error message.
 *
 * @module Input
 *
 * Usage:
 * <Input {...register('firstName')} label="First name" error={errors.firstName?.message} />
 */

import React from 'react';

/**
 * Props for the Input component.
 *
 * @typedef {Object} InputProps
 * @property {string} name - The name attribute of the input field.
 * @property {string} label - The label text for the input field.
 * @property {string} [type] - The type attribute of the input field. Default is 'text'.
 * @property {boolean} [required] - Specifies if the input field is required. Default is true.
 * @property {string} [placeholder] - The placeholder text for the input field.
 * @property {string} [error] - The error message to display for the input field.
 */

type InputProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
};

/**
 * Input component for rendering an input field with label and error message.
 *
 * @param {InputProps} props - The component props.
 * @param {React.Ref<HTMLInputElement>} ref - The ref for the input field.
 * @returns {JSX.Element} The rendered Input component.
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
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
        className={`p-2 bg-gray-200 rounded ring-2 focus:bg-gray-100 focus:outline-none ${
          error ? 'ring-red-500' : 'ring-gray-300'
        }`}
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

export default Input;
