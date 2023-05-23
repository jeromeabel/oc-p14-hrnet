// index.ts
// Give a clear overview of all the available types in one place

// Employee : used in Form and TableData
export type { EmployeeType, EmployeesType } from '../schemas/employeeSchema';

// Employee header : uses in TableData
export type {
  EmployeeHeaderType,
  EmployeeHeadersType,
} from '../schemas/employeeHeaderSchema';

// Used for Select
export type { OptionType, OptionsType } from '../schemas/optionSchema';
