"use client"
import React, { useState } from 'react';
import Pagination from '@/components/pagination';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const totalPages = 15; // Example total pages

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Example content area */}
      <div className="max-w-5xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow">
          {/* Example table or content */}
          <div className="p-6">
            <h1 className="text-2xl font-semibold mb-4">Example Content</h1>
            <div className="space-y-4">
              {Array.from({ length: perPage }).map((_, index) => (
                <div 
                  key={index} 
                  className="p-4 border rounded-lg bg-gray-50"
                >
                  Item {(currentPage - 1) * perPage + index + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Pagination component */}
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            perPage={perPage}
            onPerPageChange={setPerPage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;