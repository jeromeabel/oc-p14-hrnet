/**
 * Option schema definition.
 * Used for "option" elements in Select component
 *
 * @typedef {Object} OptionType - Type definition inferred from the optionSchema.
 * @property {string} value - The value of the option.
 * @property {string} label - The label or display text for the option.
 *
 * @typedef {OptionType[]} OptionsType - Type definition for an array of options.
 */

import { z } from 'zod';

// Define the option schema
export const optionSchema = z.object({
  value: z.string(),
  label: z.string(),
});

// Single option
export type OptionType = z.infer<typeof optionSchema>;

// Array of options
export type OptionsType = OptionType[];
