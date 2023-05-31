// Lib
import { useContext } from 'react';
import { Table } from 'ja-react-table';

import '../../node_modules/ja-react-table/dist/style.css';
import { EmployeeType } from '../types';

// Context and data
import { EmployeesContext } from '../context/EmployeesContext';
import { headers } from '../data/headers';

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
