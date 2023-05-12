import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from './Input';

import { FormType, formSchema } from '../types/types';

const AddForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="my-8 flex flex-col gap-4"
    >
      <Input
        name="firstName"
        label="First name"
        register={register}
        error={errors.firstName}
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

      <input
        className="p-3 rounded bg-secondary hover:bg-primary text-white text-xl"
        type="submit"
      />
    </form>
  );
};

export default AddForm;
