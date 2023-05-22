import { useState, useMemo, useCallback } from 'react';

// Import components
import TableHeaderCell from './TableHeaderCell';
import TableCell from './TableCell';

// Import logic
import sortData from './sortData';

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
  const [sortKey, setSortKey] = useState('startDate');
  const [sortOrder, setSortOrder] = useState<SortOrderType>('desc');

  const sortedData = useMemo(() => {
    return sortData(data, sortKey, sortOrder);
  }, [data, sortKey, sortOrder]);

  const onSort = useCallback((key: string) => {
    setSortKey(key);
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  }, []);

  return (
    <div className="my-8">
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
          {sortedData.map((item, index) => (
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
