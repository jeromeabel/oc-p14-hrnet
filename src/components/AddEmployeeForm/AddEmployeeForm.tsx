/**
 * AddEmployeeForm component for rendering a form to add a new employee.
 *
 * @module AddEmployeeForm
 */

// Lib
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

// Import types and schema
import { EmployeeType } from '../../types';
import { employeeSchema } from '../../schemas/employeeSchema';

// Import data for Select components
import { departments } from '../../data/departments';
import { states } from '../../data/states';

// Custom input components
import Select from './Select';
import Input from './Input';

const defaultEmployee = {
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: new Date('1980-01-01'),
  startDate: new Date('2020-01-01'),
  street: '77 Massachusetts Avenue',
  city: 'Boston',
  state: 'KS',
  zipCode: 2139,
  department: 'Legal',
};

/**
 * Props for the AddEmployeeForm component.
 *
 * @typedef {Object} AddEmployeeFormProps
 * @property {Function} onSubmit - The function to handle form submission.
 * @property {EmployeeType} onSubmit.data - The employee data submitted.
 */
type AddEmployeeFormProps = {
  onSubmit: (data: EmployeeType) => void;
};

/**
 * AddEmployeeForm component for rendering a form to add a new employee.
 *
 * @param {AddEmployeeFormProps} props - The component props.
 * @returns {JSX.Element} The rendered AddEmployeeForm component.
 */
const AddEmployeeForm = ({ onSubmit }: AddEmployeeFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EmployeeType>({
    resolver: zodResolver(employeeSchema),
    mode: 'all',
  });

  useEffect(() => {
    reset(defaultEmployee);
  }, [isSubmitSuccessful, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 p-4 my-8 lg:p-0 max-w-[1000px]"
    >
      <div className="flex flex-col flex-wrap gap-2">
        <div className="flex-1 grid grid-cols-1 m-w-[500px] xl:grid-cols-2 gap-y-2 gap-x-4">
          <Input
            {...register('firstName')}
            label="First name"
            error={errors.firstName?.message}
          />
          <Input
            {...register('lastName')}
            label="Last name"
            error={errors.lastName?.message}
          />
          <Input
            {...register('dateOfBirth', { valueAsDate: true })}
            type="date"
            label="Date of birth"
            error={errors.dateOfBirth?.message}
          />
          <Input
            {...register('startDate', { valueAsDate: true })}
            type="date"
            label="Start date"
            error={errors.startDate?.message}
          />
          <Select
            {...register('department')}
            label="Department"
            error={errors.department?.message}
            options={departments}
          />
        </div>

        <fieldset className="border-t py-4 flex-1 grid grid-cols-2 gap-y-2 gap-x-4">
          <legend className="text-gray-500 text-xl mx-4 px-4">Address</legend>
          <Input
            {...register('street')}
            label="Street"
            error={errors.street?.message}
          />
          <Input
            {...register('city')}
            label="City"
            error={errors.city?.message}
          />
          <Select
            {...register('state')}
            label="State"
            error={errors.state?.message}
            options={states}
          />
          <Input
            {...register('zipCode', { valueAsNumber: true })}
            type="number"
            label="Zip code"
            error={errors.zipCode?.message}
          />
        </fieldset>
      </div>

      <div className="text-white bg-secondary hover:bg-primary text-xl rounded-full w-[150px]">
        <button className="w-full  p-3" type="submit" disabled={isSubmitting}>
          Send
        </button>
      </div>
    </form>
  );
};

export default AddEmployeeForm;
