/**
 * Select component for rendering a select field with label and error message.
 *
 * @module Select
 *
 */

import React from 'react';

/**
 * Option type for defining the options of the select field.
 *
 * @typedef {Object} Option
 * @property {string} value - The value of the option.
 * @property {string} label - The label text for the option.
 */

type Option = {
  value: string;
  label: string;
};

/**
 * Props for the Select component.
 *
 * @typedef {Object} SelectProps
 * @property {Option[]} options - The options for the select field.
 * @property {string} [error] - The error message to display for the select field.
 * @property {string} name - The name attribute of the select field.
 * @property {string} label - The label text for the select field.
 * @property {boolean} [required] - Specifies if the select field is required. Default is true.
 */
type SelectProps = {
  options: Option[];
  error?: string;
  name: string;
  label: string;
  required?: boolean;
};

/**
 * Select component for rendering a select field with label and error message.
 *
 * @param {SelectProps} props - The component props.
 * @param {React.Ref<HTMLSelectElement>} ref - The ref for the select field.
 * @returns {JSX.Element} The rendered Select component.
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
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
        className={`p-2 bg-gray-200 rounded ring-2 focus:bg-gray-100 focus:outline-none ${
          error ? 'ring-red-500' : 'ring-gray-300'
        }`}
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

export default Select;
