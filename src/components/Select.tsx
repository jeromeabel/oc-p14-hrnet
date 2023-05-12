import {
  Path,
  UseFormRegister,
  FieldError,
  FieldValues,
} from 'react-hook-form';

type SelectProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  register: UseFormRegister<T>;
  required?: boolean;
  error?: FieldError;
  options: { label: string; value: string }[];
};

function Select<T extends FieldValues>({
  options,
  name,
  label,
  register,
  required = true,
  error,
}: SelectProps<T>) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-gray-600">
        {label} {required && '*'}
      </label>
      <select
        {...register(name)}
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
            ⚠️ {error.message}
          </span>
        )}
      </p>
    </div>
  );
}

export default Select;
