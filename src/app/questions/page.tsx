"use client"
import { useState } from "react";
import Pagination from "@/components/pagination"; // Adjust path if needed

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const totalPages = 1616016; // Example large number

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePerPageChange = (size: number) => {
    setPerPage(size);
    setCurrentPage(1); // Reset to first page when per-page changes
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Pagination Example</h1>

      {/* Your content here (e.g., list of items) */}
      <div className="border p-4 rounded-md">Content for Page {currentPage}</div>

      {/* Pagination Component */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        perPage={perPage}
        onPerPageChange={handlePerPageChange}
      />
    </div>
  );
}
