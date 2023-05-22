import { SortOrderType, RecordHeaderType } from './TableData';

type TableHeaderCellProps<THeader extends RecordHeaderType> = {
  col: THeader;
  sortKey: string;
  sortOrder: SortOrderType;
  onSort: (key: string) => void;
};

const TableHeaderCell = <THeader extends RecordHeaderType>({
  col,
  sortKey,
  sortOrder,
  onSort,
}: TableHeaderCellProps<THeader>) => {
  const handleClick = () => {
    onSort(col.key);
  };

  const renderSortIndicator = () => {
    if (sortKey === col.key && sortOrder === 'asc') {
      return ' ⬆️';
    } else if (sortKey === col.key && sortOrder === 'desc') {
      return ' ⬇️';
    } else {
      return ' ↕️';
    }
  };

  return (
    <th className="px-0 py-4">
      <button
        className="hover:bg-green-300 hover:cursor-pointer"
        onClick={handleClick}
      >
        {col.label}
        {renderSortIndicator()}
      </button>
    </th>
  );
};

export default TableHeaderCell;
