/**
 * View page component.
 *
 * Renders the View page content with a table displaying current employees.
 *
 * @module View
 */

// Lib
import { Table } from 'ja-react-table';

// Style for ja-react-table
import 'ja-react-table/dist/style.css';

// Context and data
import { useEmployeesContext } from '../context/EmployeesContext';
import { EmployeeType } from '../types';
import { headers } from '../data/headers';

/**
 * The View page component.
 *
 * @returns {JSX.Element} The rendered View page content.
 */
const View = () => {
  const { employees } = useEmployeesContext();
  return (
    <div>
      <h1 className="mb-8 text-4xl">Current employees</h1>
      <Table<EmployeeType> headers={headers} items={employees} />
    </div>
  );
};

export default View;
