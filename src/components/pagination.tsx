"use client"

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  perPage: number;
  onPerPageChange: (perPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
  perPage,
  onPerPageChange,
}) => {
  const maxPagesToShow = 5; // Number of pages to display before showing "..."
  const pageNumbers = [];
  
  let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
  const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

  if (endPage - startPage < maxPagesToShow - 1) {
    startPage = Math.max(1, endPage - maxPagesToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-between space-x-4 mt-4">
      {/* Pagination */}
      <div className="flex items-center space-x-2">
        {/* Page Numbers */}
        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-2 border rounded-md ${
              currentPage === page ? "bg-orange-500 text-white" : "hover:bg-gray-100"
            } `}
          >
            {page}
          </button>
        ))}

        {/* Ellipsis for large page sets */}
        {endPage < totalPages - 1 && <span className="px-3 py-2">...</span>}

        {/* Last Page */}
        {endPage < totalPages && (
          <button
            onClick={() => onPageChange(totalPages)}
            className="px-3 py-2 border rounded-md hover:bg-gray-100"
          >
            {totalPages}
          </button>
        )}

        {/* Next Button */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 border rounded-md ${
            currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "hover:bg-gray-100"
          } `}
        >
          Next
        </button>
      </div>

      {/* Per Page Selection */}
      <div className="flex items-center space-x-2">
        {[15, 30, 50].map((size) => (
          <button
            key={size}
            onClick={() => onPerPageChange(size)}
            className={`px-3 py-2 border rounded-md ${
              perPage === size ? "bg-orange-500 text-white" : "hover:bg-gray-100"
            } `}
          >
            {size}
          </button>
        ))}
        <span className="text-gray-600">per page</span>
      </div>
    </div>
  );
};

export default Pagination;
