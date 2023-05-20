import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { AddFormType, addFormSchema } from '../types/types';
import { departments, states } from '../data/data';
import Select from './Select';
import Input from './Input';

const defaultData = {
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: new Date('1980-01-01'),
  startDate: new Date('2020-01-01'),
  street: '77 Massachusetts Avenue',
  city: 'Boston',
  zipCode: 2139,
  department: 'Legal',
  state: 'KS',
};

type AddFormProps = {
  onSubmit: (data: AddFormType) => void;
};

const AddForm = ({ onSubmit }: AddFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddFormType>({
    resolver: zodResolver(addFormSchema),
    mode: 'all',
    defaultValues: defaultData,
  });

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
        <Select
          {...register('state')}
          label="State"
          error={errors.state?.message}
          options={states}
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

export default AddForm;
