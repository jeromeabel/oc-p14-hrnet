import TableData from '../components/TableData/TableData';

import { EmployeeType, EmployeeHeaderType } from '../types';
import { employees } from '../data/employees';
import { headers } from '../data/headers';

const View = () => {
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
