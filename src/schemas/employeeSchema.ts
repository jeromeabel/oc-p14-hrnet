/**
 * Employee schema definition using Zod.
 * @typedef {Object} EmployeeType - Type definition inferred from the employeeSchema.
 * @property {string} firstName - The first name of the employee. Must contain only letters.
 * @property {string} lastName - The last name of the employee. Must contain only letters.
 * @property {Date} dateOfBirth - The date of birth of the employee. Must be in the past and the employee must be 18 years or older.
 * @property {Date} startDate - The start date of the employee. Must be in the past.
 * @property {string} street - The street address of the employee. Must be between 5 and 100 characters.
 * @property {string} city - The city of residence of the employee. Must be between 2 and 100 characters.
 * @property {string} state - The state of residence of the employee. Must be between 2 and 80 characters.
 * @property {number} zipCode - The zip code of the employee's residence (USA). Must be a 5-digit number between 501 and 99950.
 * @property {string} department - The department of the employee. Must be between 2 and 80 characters.
 */

import { z } from 'zod';

// Zod schema
export const employeeSchema = z.object({
  firstName: z
    .string()
    .min(2)
    .max(50)
    .regex(/^[A-ÿ]{2,}[A-ÿ\-\s]*$/, {
      message: 'The first name must contain only letters',
    }),
  lastName: z
    .string()
    .min(2)
    .max(60)
    .regex(/^[A-ÿ]{2,}[A-ÿ\-\s]*$/, {
      message: 'The last name must contain only letters',
    }),
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
  state: z.string().min(2).max(80),
  zipCode: z
    .number({ invalid_type_error: 'American zip code is 5-digit' })
    .min(501)
    .max(99950),
  department: z.string().min(2).max(80),
});

// Exports
export type EmployeeType = z.infer<typeof employeeSchema>;
export type EmployeesType = EmployeeType[];
