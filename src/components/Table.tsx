import TableHeaderColumn from './TableHeaderColumn';

import { mockData } from '../data/mockData';
import TableRow from './TableRow';
import { useState } from 'react';

const headers = [
  { key: 'firstName', label: 'First name' },
  { key: 'lastName', label: 'Last name' },
  { key: 'startDate', label: 'Start date' },
  { key: 'department', label: 'Department' },
  { key: 'dateOfBirth', label: 'Date of birth' },
  { key: 'street', label: 'Street' },
  { key: 'city', label: 'City' },
  { key: 'state', label: 'State' },
  { key: 'zipCode', label: 'Zip code' },
];

const Table = () => {
  const originalData = mockData;
  const [currentData, setCurrentData] = useState(mockData);

  const filterNumber = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const inputValue = event.target.value;
    const parsedValue = parseInt(inputValue, 10); // Parse input value to an integer
    if (!isNaN(parsedValue)) {
      setCurrentData(originalData.slice(0, parsedValue));
    } else {
      if (event.target.value === 'All') setCurrentData(originalData);
    }
  };

  return (
    <div className="my-8">
      {/* <input type="number" onChange={filterNumber} className="bg-green-500" /> */}

      <div className="flex gap-4 align-middle">
        <label htmlFor="filterSelect" aria-label="Filter data by number">
          Show:
        </label>
        <select className="p-1" id="filterSelect" onChange={filterNumber}>
          <option>All</option>
          <option>2</option>
          <option>4</option>
          <option>6</option>
          <option>8</option>
        </select>
        <span>entries</span>
      </div>

      <table className="w-full my-8">
        <thead>
          <tr>
            {headers.map((col) => (
              <TableHeaderColumn key={col.key} label={col.label} />
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((data) => (
            <TableRow
              key={`${data.lastName}-${data.dateOfBirth}`}
              data={data}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
