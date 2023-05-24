import TableData from '../components/TableData/TableData';

import { EmployeeType, EmployeeHeaderType } from '../types';
// import { employees } from '../data/employees'; // mock data to test TableData
import { headers } from '../data/headers';
import { useContext } from 'react';
import { EmployeesContext } from '../context/EmployeesContext';

const View = () => {
  const { employees } = useContext(EmployeesContext);
  return (
    <div>
      <h1>Current employees</h1>
      <TableData<EmployeeType, EmployeeHeaderType>
        data={employees}
        headers={headers}
      />
    </div>
  );
};

export default View;
