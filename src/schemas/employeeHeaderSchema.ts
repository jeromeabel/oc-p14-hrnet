/**
 * Type definitions for employee headers.
 * Used in Table component
 *
 * @typedef {Object} EmployeeHeaderType - Type definition for an employee header.
 * @property {keyof EmployeeType} name - The name of the header, representing a key in the EmployeeType.
 * @property {string} label - The label or display name for the header.
 *
 * @typedef {EmployeeHeaderType[]} EmployeeHeadersType - Type definition for an array of employee headers.
 */

import { EmployeeType } from './employeeSchema';

// Single header
export type EmployeeHeaderType = {
  name: keyof EmployeeType;
  label: string;
};

// Array of headers
export type EmployeeHeadersType = EmployeeHeaderType[];
