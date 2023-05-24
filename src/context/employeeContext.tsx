import { PropsWithChildren, createContext, useState } from 'react';
import { EmployeeType, EmployeesType } from '../types';

const defaultEmployee = {
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: new Date('1980-01-01'),
  startDate: new Date('2020-01-01'),
  street: '77 Massachusetts Avenue',
  city: 'Boston',
  state: 'KS',
  zipCode: 2139,
  department: 'Legal',
};

// Step 1: Create a new Context
export const EmployeesContext = createContext<{
  employeesData: EmployeesType;
  updateEmployeesData: (newData: EmployeeType) => void;
}>({
  employeesData: [],
  updateEmployeesData: () => {
    // Empty function
  },
});

export const EmployeesProvider = ({ children }: PropsWithChildren) => {
  // Step 2: Define state and update function
  const [employeesData, setEmployeesData] = useState<EmployeesType>([]);

  const updateEmployeesData = (newData: EmployeeType) => {
    setEmployeesData([...employeesData, newData]);
  };

  return (
    // Step 3: Wrap your components with the Context Provider
    <EmployeesContext.Provider value={{ employeesData, updateEmployeesData }}>
      {children}
    </EmployeesContext.Provider>
  );
};
