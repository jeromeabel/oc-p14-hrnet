import { Path, UseFormRegister, FieldError } from 'react-hook-form';
import { FormType } from '../types/types';

type InputProps = {
  name: Path<FormType>;
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegister<FormType>;
  required?: boolean;
  error?: FieldError;
};

const Input = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  register,
  required = true,
  error,
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-gray-600">
        {label} {required && '*'}
      </label>
      <input
        className="p-3 border bg-gray-200 rounded focus:bg-gray-100 text-xl"
        id={name}
        type={type}
        {...register(name, { valueAsNumber: type === 'number' })}
        placeholder={placeholder}
        aria-invalid={error ? 'true' : 'false'}
      />
      <p aria-live="polite" className="h-6">
        {error && (
          <span className="text-red-500 px-2" role="alert">
            ⚠️ {error.message}
          </span>
        )}
      </p>
    </div>
  );
};

export default Input;
