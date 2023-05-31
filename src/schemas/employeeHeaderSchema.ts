import { EmployeeType } from './employeeSchema';

export type EmployeeHeaderType = {
  name: keyof EmployeeType;
  label: string;
};

export type EmployeeHeadersType = EmployeeHeaderType[];
