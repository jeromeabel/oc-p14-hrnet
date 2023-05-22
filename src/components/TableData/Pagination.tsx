import { useState, useEffect } from 'react';

type PaginationProps = {
  onChange: (page: number) => void;
  totalEntries: number;
  entriesPerPage: number;
};

const Pagination: React.FC<PaginationProps> = ({
  onChange,
  totalEntries,
  entriesPerPage,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      setCurrentPage(page);
      onChange((page - 1) * entriesPerPage + 1);
    }
  };

  // Reset the page to 1 when entriesPerPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage]);

  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(startEntry + entriesPerPage - 1, totalEntries);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`p-2 border hover:cursor-pointer ${
            currentPage === i ? 'border-black' : 'border-transparent'
          }`}
          onClick={() => handlePageChange(i)}
        >
          <button>{i}</button>
        </li>
      );
    }
    return pageNumbers;
  };

  const renderButton = (
    label: string,
    onClick: () => void,
    isDisabled: boolean
  ) => (
    <button
      className={`p-2 border ${
        isDisabled ? 'opacity-50' : 'hover:cursor-pointer hover:border-black'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );

  return (
    <div className="flex justify-between">
      <p>
        Showing {startEntry} to {endEntry} of {totalEntries} entries
      </p>

      <nav className="flex gap-8">
        {renderButton(
          'Previous',
          () => handlePageChange(currentPage - 1),
          currentPage === 1
        )}
        <ul className="flex gap-2">{renderPageNumbers()}</ul>
        {renderButton(
          'Next',
          () => handlePageChange(currentPage + 1),
          currentPage === totalPages
        )}
      </nav>
    </div>
  );
};

export default Pagination;
