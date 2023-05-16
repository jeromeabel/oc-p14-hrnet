import { z } from 'zod';

// By default, all fields are required
export const formSchema = z.object({
  firstName: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[A-ÿ]{2,}[A-ÿ\-\s]*$/),
  lastName: z
    .string()
    .min(2)
    .max(60)
    .regex(/^[A-ÿ]{2,}[A-ÿ\-\s]*$/),
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
      { message: 'The employee must be 18 years or older' }
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
  department: z.string(),
  state: z.string(),
});

// Typescript
export type FormType = z.infer<typeof formSchema>;
