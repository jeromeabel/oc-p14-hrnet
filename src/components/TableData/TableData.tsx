import { useState, useMemo } from 'react';

// Import components
import TableHeaderCell from './TableHeaderCell';
import TableCell from './TableCell';
import InputLength from './InputLength';

// Import logic
import { sortData, filterDataByLength, filterDataBySearch } from './dataUtils';
import InputSearch from './InputSearch';

// Export types
export type ItemValueType = number | string | Date | boolean;
export type SortOrderType = 'asc' | 'desc';
export type RecordItemType = Record<string, ItemValueType>;
export type RecordHeaderType = Record<string, string>;

type TableDataProps<
  TItem extends RecordItemType,
  THeader extends RecordHeaderType
> = {
  data: TItem[];
  headers: THeader[];
};

// Main component
const TableData = <
  TItem extends RecordItemType,
  THeader extends RecordHeaderType
>({
  data,
  headers,
}: TableDataProps<TItem, THeader>) => {
  //State variables for the filters
  const [sortKey, setSortKey] = useState('startDate');
  const [sortOrder, setSortOrder] = useState<SortOrderType>('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterLength, setFilterLength] = useState(0);

  const currentData = useMemo(() => {
    let newData = [...data];

    // Apply search filter
    if (searchTerm) {
      newData = filterDataBySearch(newData, searchTerm);
    }

    // Apply length filter
    if (filterLength > 0) {
      newData = filterDataByLength(newData, filterLength);
    }

    // Apply sort
    newData = sortData(newData, sortKey, sortOrder);

    return newData;
  }, [data, sortKey, sortOrder, searchTerm, filterLength]);

  // ?useCallback
  const onSort = (key: string) => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    setSortKey(key);
  };

  const onSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const onLength = (length: number) => {
    setFilterLength(length);
  };

  return (
    <div className="my-8">
      <div className="flex justify-between">
        <InputLength onChange={onLength} />
        <InputSearch onChange={onSearch} />
      </div>

      <table className="w-full my-8">
        <thead className="border-b">
          <tr>
            {headers.map((col, index) => (
              <TableHeaderCell
                key={index}
                col={col}
                sortKey={sortKey}
                sortOrder={sortOrder}
                onSort={onSort}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((key) => (
                <TableCell key={key} item={item} keyName={key} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableData;
