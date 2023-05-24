import TableData from '../components/TableData/TableData';

import { EmployeeType, EmployeeHeaderType } from '../types';
// import { employees } from '../data/employees';
import { headers } from '../data/headers';
import { useContext } from 'react';
import { EmployeesContext } from '../context/employeeContext';

const View = () => {
  const { employeesData } = useContext(EmployeesContext);
  return (
    <div>
      <h1>Current employees</h1>
      <TableData<EmployeeType, EmployeeHeaderType>
        data={employeesData}
        headers={headers}
      />
    </div>
  );
};

export default View;
