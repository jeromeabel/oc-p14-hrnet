import TableData from '../components/TableData/TableData';
import {
  ItemType,
  mockData,
  mockDataHeaders,
  HeaderType,
} from '../data/mockData';

const View = () => {
  return (
    <div>
      <h1>Current employees</h1>
      <TableData<ItemType, HeaderType>
        data={mockData}
        headers={mockDataHeaders}
      />
    </div>
  );
};

export default View;
