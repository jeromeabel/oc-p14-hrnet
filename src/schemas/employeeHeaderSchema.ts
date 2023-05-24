import { EmployeeType } from './employeeSchema';

export type EmployeeHeaderType = {
  key: keyof EmployeeType;
  label: string;
};

export type EmployeeHeadersType = EmployeeHeaderType[];
