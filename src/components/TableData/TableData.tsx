import { useState } from 'react';

type ItemValue = number | string | Date | boolean;

type TableDataProps<
  TItem extends Record<string, ItemValue>,
  THeader extends Record<string, string>
> = {
  data: TItem[];
  headers: THeader[];
};

const TableData = <
  TItem extends Record<string, ItemValue>,
  THeader extends Record<string, string>
>({
  data,
  headers,
}: TableDataProps<TItem, THeader>) => {
  const [filteredData, setFilteredData] = useState([...data]);
  const [sortKey, setSortKey] = useState('startDate');
  const [sortOrder, setSortOrder] = useState('desc');

  const onSort = (key: string) => {
    const order = key === sortKey && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortKey(key);
    setSortOrder(order);
    sortData(key, order);
  };

  const sortData = (key: string, order: string) => {
    const newData = [...filteredData].sort((a, b) => {
      return a[key] < b[key] ? 1 : -1; // desc order
    });
    if (order === 'asc') newData.reverse();
    setFilteredData(newData);
  };

  return (
    <div className="my-8">
      <table className="w-full my-8">
        <thead className="border-b">
          <tr>
            {headers.map((col, index) => (
              <th key={index} className="px-0 py-4 ">
                <button
                  className="hover:bg-green-300 hover:cursor-pointer"
                  onClick={() => onSort(col.key)}
                >
                  {col.label}
                  {sortKey === col.key && sortOrder === 'asc' && ' ⬆️'}
                  {sortKey === col.key && sortOrder === 'desc' && ' ⬇️'}
                  {!(sortKey === col.key && sortOrder === 'asc') &&
                    !(sortKey === col.key && sortOrder === 'desc') &&
                    ' ↕️'}
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((key) => (
                <td key={key}>
                  {typeof item[key] !== 'object' || !(item[key] instanceof Date)
                    ? String(item[key])
                    : item[key].toLocaleString().split(' ')[0]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
