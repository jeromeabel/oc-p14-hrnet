/**
 * Employees Context and Provider.
 *
 * Provides a context for managing employees data and a provider component to wrap components with the context.
 * Also includes a custom hook for accessing the employees context.
 *
 * @module EmployeesContext
 */

import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { EmployeeType, EmployeesType } from '../types';

import { employees as defaultEmployees } from '../data/employees'; // mock data to test Table component

/**
 * The shape of the Employees Context.
 */
type EmployeesContextProps = {
  employees: EmployeesType;
  addEmployee: (newEmployee: EmployeeType) => void;
};

// #1: Create the Context
export const EmployeesContext = createContext<EmployeesContextProps>({
  employees: [],
  addEmployee: () => {
    // Empty function
  },
});

/**
 * Employees Provider component.
 *
 * @param {PropsWithChildren} props - The component props.
 * @returns {JSX.Element} The rendered Employees Provider component.
 */
export const EmployeesProvider = ({ children }: PropsWithChildren) => {
  // #2: Define state and update function
  const [employees, setEmployees] = useState<EmployeesType>(defaultEmployees);

  /**
   * Add an employee to the employees data.
   *
   * @param {EmployeeType} newEmployee - The new employee to add.
   */
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

/**
 * Custom hook for accessing the Employees Context.
 *
 * @returns {EmployeesContextProps} The Employees Context object.
 * @throws {Error} Throws an error if used outside the EmployeesProvider.
 */
export const useEmployeesContext = (): EmployeesContextProps => {
  const context = useContext(EmployeesContext);

  if (!context) {
    throw new Error(
      'useEmployeesContext must be used inside the EmployeesProvider'
    );
  }

  return context;
};
