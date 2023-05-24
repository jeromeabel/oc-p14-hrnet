import { useState, useMemo } from 'react';

// Import components
import TableHeaderCell from './TableHeaderCell';
import TableCell from './TableCell';
import InputEntries from './InputEntries';
import InputSearch from './InputSearch';
import PaginationButtons from './PaginationButtons';

// Import logic
import { sortData, filterDataBySearch } from './utils';

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
  sortBy?: string;
};

const TableData = <
  TItem extends RecordItemType,
  THeader extends RecordHeaderType
>({
  data,
  headers,
  sortBy = 'startDate',
}: TableDataProps<TItem, THeader>) => {
  // State variables for the filters
  const [sortKey, setSortKey] = useState(sortBy);
  const [sortOrder, setSortOrder] = useState<SortOrderType>('desc');
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
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

  let startEntry = paginatedData.startEntry + 1;
  if (paginatedData.totalEntries === 0) startEntry = 0;

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
      <div className="my-10 rounded-lg shadow-lg overflow-auto">
        <table className="w-full">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <TableHeaderCell
                  key={index}
                  cellKey={header.key}
                  cellLabel={header.label}
                  sortKey={sortKey}
                  sortOrder={sortOrder}
                  onSort={handleSort}
                />
              ))}
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {paginatedData.data.map((item, index) => (
              <tr key={index} className="even:bg-slate-50">
                {Object.keys(item).map((key) => (
                  <TableCell key={key} item={item} keyName={key} />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between">
        <div>
          Showing {startEntry} to {paginatedData.endEntry} of{' '}
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
