import { z } from 'zod';

// Define the option schema
export const optionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

// Define the type for a single option
export type OptionType = z.infer<typeof optionSchema>;

// Define the type for an array of options
export type OptionsType = OptionType[];
