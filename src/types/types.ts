import { z } from 'zod';

// <input type="url" pattern="//"> = string vs URL()
// <input type="number" > = string : add valueAsNumber property = true
// <input type="date" > = string "dd-mm-yyyy" vs Date()

// By default, all fields are required
export const formSchema = z.object({
  firstName: z.string().min(2).max(30),
  lastName: z.string().min(2).max(60),
  dateOfBirth: z.coerce
    .date()
    .min(new Date('1920-01-01'), {
      message: 'Date cannot go past January 1 1920',
    })
    .max(new Date(), { message: 'Date must be in the past' })
    .refine(
      (date) => {
        const ageDifMs = Date.now() - date.getTime();
        const ageDate = new Date(ageDifMs);
        const age = Math.abs(ageDate.getUTCFullYear() - 1970);
        return age >= 18;
      },
      { message: 'You must be 18 years or older' }
    ),
  startDate: z.coerce
    .date()
    .min(new Date('2000-01-01'), {
      message: 'Date cannot go past January 1 2000',
    })
    .max(new Date(), { message: 'Date must be in the past' }),
  street: z.string().min(5).max(100),
  city: z.string().min(2).max(100),
  zipCode: z.number().min(501).max(99950), // American 5-digit code
});

// Typescript : magical
export type FormType = z.infer<typeof formSchema>;
