import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { EmployeeType, EmployeesType } from '../types';

import { employees as defaultEmployees } from '../data/employees'; // mock data to test TableData

type EmployeesContextProps = {
  employees: EmployeesType;
  addEmployee: (newEmployee: EmployeeType) => void;
};

// #1: Create the Context
// Generic = Impossible d'assigner le type 'EmployeesType' au type 'never[]'. in value={{employees, addEmployee}}
// Empty function to avoid :Unexpected empty method 'addEmployee'
export const EmployeesContext = createContext<EmployeesContextProps>({
  employees: [],
  addEmployee: () => {
    // Empty function
  },
});

// export const EmployeesContext = createContext<EmployeesContextProps | null>(
//   null
// );

export const EmployeesProvider = ({ children }: PropsWithChildren) => {
  // #2: Define state and update function
  const [employees, setEmployees] = useState<EmployeesType>(defaultEmployees);

  const addEmployee = (newEmployee: EmployeeType) => {
    setEmployees([...employees, newEmployee]);
  };

  return (
    // #3: Wrap components with the Context Provider
    <EmployeesContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeesContext.Provider>
  );
};

export const useEmployeesContext = () => {
  const context = useContext(EmployeesContext);

  if (!context) {
    throw new Error(
      'useEmployeesContext must be used inside the EmployeesProvider'
    );
  }

  return context;
};
