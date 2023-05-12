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
    //defaultValues: { firstName: 'luo'},
  });

  //  const onSubmit: SubmitHandler<FormType> = data => {
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
        type="email"
        name="email"
        label="Email"
        register={register}
        error={errors.email}
      />

      <Input
        type="url"
        name="link"
        label="Link"
        register={register}
        error={errors.link}
      />

      <Input
        type="date"
        name="dateOfBirth"
        label="Date of birth"
        register={register}
        error={errors.dateOfBirth}
      />

      <Input
        type="number"
        name="zipCode"
        label="Zip code"
        register={register}
        error={errors.zipCode}
      />

      <input
        className="p-3 rounded bg-secondary hover:bg-primary text-white text-xl"
        type="submit"
      />
    </form>
  );
};

export default AddForm;
