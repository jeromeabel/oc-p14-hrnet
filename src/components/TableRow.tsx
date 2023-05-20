import { AddFormType } from '../types/types';

type RowProps = {
  data: AddFormType;
};

const TableRow = ({ data }: RowProps) => {
  return (
    <tr className="text-xl">
      <td>{data.firstName}</td>
      <td>{data.lastName}</td>
      <td>{data.startDate.toLocaleDateString('en-US')}</td>
      <td>{data.department}</td>
      <td>{data.dateOfBirth.toLocaleDateString('en-US')}</td>
      <td>{data.street}</td>
      <td>{data.city}</td>
      <td>{data.state}</td>
      <td>{data.zipCode}</td>
    </tr>
  );
};

export default TableRow;
