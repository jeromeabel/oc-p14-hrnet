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

const voidEmployee = {
  firstName: '',
  lastName: '',
  dateOfBirth: new Date('1900-01-01'),
  startDate: new Date('1900-01-01'),
  street: '',
  city: '',
  state: '',
  zipCode: 0,
  department: '',
};

type AddEmployeeFormProps = {
  onSubmit: (data: EmployeeType) => void;
};

const AddEmployeeForm = ({ onSubmit }: AddEmployeeFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<EmployeeType>({
    resolver: zodResolver(employeeSchema),
    mode: 'all',
    // defaultValues: voidEmployee, // Used for testing
  });

  useEffect(() => {
    reset(defaultEmployee);
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-8 flex flex-col gap-4"
      >
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

        <fieldset className="p-4 border">
          <legend>Address</legend>

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

        <Select
          {...register('department')}
          label="Department"
          error={errors.department?.message}
          options={departments}
        />

        <input
          className="p-3 rounded bg-secondary hover:bg-primary text-white text-xl cursor-pointer"
          type="submit"
          disabled={isSubmitting}
        />
      </form>
    </div>
  );
};

export default AddEmployeeForm;
