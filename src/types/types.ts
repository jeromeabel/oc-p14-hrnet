import { z } from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(2).max(30),
  email: z.string().email(),
  link: z
    .string()
    .url()
    .regex(
      /^(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,}(?:\/[^\s]*)?$/
    ),
  dateOfBirth: z.coerce
    .date()
    .min(new Date('1900-01-01'), { message: 'Please provide an earlier date' })
    .max(new Date(), { message: 'Please provide an older date!' }),
  zipCode: z.number().min(501).max(99950), // American 5-digit code
});

export type FormType = z.infer<typeof formSchema>;
