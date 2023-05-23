import { useState, useMemo } from 'react';

// Import components
import TableHeaderCell from './TableHeaderCell';
import TableCell from './TableCell';
import InputEntries from './InputEntries';
import InputSearch from './InputSearch';
import PaginationButtons from './PaginationButtons';

// Import logic
import { sortData, filterDataBySearch } from './dataUtils';

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

const TableData = <
  TItem extends RecordItemType,
  THeader extends RecordHeaderType
>({
  data,
  headers,
}: TableDataProps<TItem, THeader>) => {
  // State variables for the filters
  const [sortKey, setSortKey] = useState('startDate');
  const [sortOrder, setSortOrder] = useState<SortOrderType>('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  // Memo functions : search, sort, pagination
  const filteredData = useMemo(() => {
    return filterDataBySearch(data, searchTerm);
  }, [data, searchTerm]);

  const sortedData = useMemo(() => {
    return sortData(filteredData, sortKey, sortOrder);
  }, [filteredData, sortKey, sortOrder]);

  const totalPages = useMemo(() => {
    return Math.ceil(sortedData.length / entriesPerPage);
  }, [sortedData.length, entriesPerPage]);

  const paginatedData = useMemo(() => {
    const startEntry = (currentPage - 1) * entriesPerPage;
    const endEntry = Math.min(startEntry + entriesPerPage, sortedData.length);
    const dataSlice = sortedData.slice(startEntry, endEntry);
    return {
      data: dataSlice,
      startEntry,
      endEntry,
      totalEntries: sortedData.length,
    };
  }, [sortedData, entriesPerPage, currentPage]);

  // Event functions
  const handleSort = (key: string) => {
    setSortKey(key);
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handleEntries = (length: number) => {
    const currentEntryIndex = (currentPage - 1) * entriesPerPage;
    const newPageNumber = Math.floor(currentEntryIndex / length) + 1;
    setEntriesPerPage(length);
    setCurrentPage(newPageNumber); // find the accurate page number
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="my-8">
      <div className="flex justify-between">
        <InputEntries onChange={handleEntries} />
        <InputSearch onChange={handleSearch} />
      </div>
      <table className="w-full my-8">
        <thead className="border-b">
          <tr>
            {headers.map((col) => (
              <TableHeaderCell
                key={col.key}
                col={col}
                sortKey={sortKey}
                sortOrder={sortOrder}
                onSort={handleSort}
              />
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.data.map((item, index) => (
            <tr key={index}>
              {Object.keys(item).map((key) => (
                <TableCell key={key} item={item} keyName={key} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between">
        <div>
          Showing {paginatedData.startEntry + 1} to {paginatedData.endEntry} of{' '}
          {paginatedData.totalEntries} entries
        </div>
        <PaginationButtons
          currentPage={currentPage}
          totalPages={totalPages}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default TableData;
