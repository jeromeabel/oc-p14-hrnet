import { EmployeeType } from './employeeSchema';

export type EmployeeHeaderType = {
  key: keyof EmployeeType; //string
  label: string;
};

export type EmployeeHeadersType = EmployeeHeaderType[];
