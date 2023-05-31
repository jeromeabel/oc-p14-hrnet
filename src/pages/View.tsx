/**
 * View page component.
 *
 * Renders the View page content with a table displaying current employees.
 *
 * @module View
 */

// Lib
import { useContext } from 'react';
import { Table } from 'ja-react-table';

// Style for ja-react-table
import '../../node_modules/ja-react-table/dist/style.css';

// Context and data
import { EmployeesContext } from '../context/EmployeesContext';
import { EmployeeType } from '../types';
import { headers } from '../data/headers';

/**
 * The View page component.
 *
 * @returns {JSX.Element} The rendered View page content.
 */
const View = () => {
  const { employees } = useContext(EmployeesContext);
  return (
    <div>
      <h1 className="mb-8">Current employees</h1>
      <Table<EmployeeType> headers={headers} items={employees} />
    </div>
  );
};

export default View;
