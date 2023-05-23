import { SortOrderType } from './TableData';

type TableHeaderCellProps = {
  cellKey: string;
  cellLabel: string;
  sortKey: string;
  sortOrder: SortOrderType;
  onSort: (key: string) => void;
};

const TableHeaderCell = ({
  cellKey,
  cellLabel,
  sortKey,
  sortOrder,
  onSort,
}: TableHeaderCellProps) => {
  const handleClick = () => {
    onSort(cellKey);
  };

  const renderSortIndicator = () => {
    if (sortKey === cellKey && sortOrder === 'asc') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 p-1 rounded-full bg-primary text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
          />
        </svg>
      );
    } else if (sortKey === cellKey && sortOrder === 'desc') {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 p-1 rounded-full bg-primary text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
          />
        </svg>
      );
    }
  };

  return (
    <th className="px-0 py-4 font-semibold tracking-wide">
      <button
        className=" hover:text-primary hover:cursor-pointer flex gap-2 items-center"
        onClick={handleClick}
      >
        {cellLabel}
        {renderSortIndicator()}
      </button>
    </th>
  );
};

export default TableHeaderCell;
