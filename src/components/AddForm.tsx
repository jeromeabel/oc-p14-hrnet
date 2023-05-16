import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from './Input';

import { FormType, formSchema } from '../types/types';
// import Select from './Select';
import { departments, states } from '../data/data';
import Select2 from './Select2';
import Input2 from './Input2';

const AddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: new Date('1980-01-01'),
      startDate: new Date('2020-01-01'),
      street: '77 Massachusetts Avenue',
      city: 'Boston',
      zipCode: 2139,
      department: 'Legal',
      state: 'KS',
    },
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-8 flex flex-col gap-4"
    >
      {/* <Input
        name="firstName"
        label="First name"
        register={register}
        error={errors.firstName}
      /> */}

      <Input2
        {...register('firstName')}
        label="First name"
        error={errors.firstName?.message}
      />
      <Input
        name="lastName"
        label="Last name"
        register={register}
        error={errors.lastName}
      />
      <Input
        type="date"
        name="dateOfBirth"
        label="Date of birth"
        register={register}
        error={errors.dateOfBirth}
      />
      <Input
        type="date"
        name="startDate"
        label="Start date"
        register={register}
        error={errors.startDate}
      />

      <fieldset className="p-4 border">
        <legend>Address</legend>

        <Input
          name="street"
          label="Street"
          register={register}
          error={errors.street}
        />
        <Input
          name="city"
          label="City"
          register={register}
          error={errors.city}
        />

        <Input
          type="number"
          name="zipCode"
          label="Zip code"
          register={register}
          error={errors.zipCode}
        />
      </fieldset>

      {/* <Select<FormType>
        name="department"
        label="Department"
        error={errors.department}
        register={register}
        options={departments}
      /> */}

      {/* <Select<FormType>
        name="state"
        label="State"
        error={errors.state}
        register={register}
        options={states}
      /> */}

      <Select2
        {...register('department')}
        label="Department"
        error={errors.department?.message}
        options={departments}
      />

      <Select2
        {...register('state')}
        label="State"
        error={errors.state?.message}
        options={states}
      />

      <input
        className="p-3 rounded bg-secondary hover:bg-primary text-white text-xl"
        type="submit"
        disabled={isSubmitting}
      />
    </form>
  );
};

export default AddForm;
